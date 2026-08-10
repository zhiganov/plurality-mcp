#!/usr/bin/env node

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { isInitializeRequest } from '@modelcontextprotocol/sdk/types.js';
import crypto from 'node:crypto';
import express from 'express';
import { z } from 'zod';
import * as mcpcat from 'mcpcat';
import { searchAll } from './search.js';
import {
  CASES, FAILURE_MODES, GOVERNANCE_FORMS,
  POLICY_STRATEGIES, GLOSSARY, QUOTES,
} from './data/index.js';

// mcpcat in exporters-only mode (no mcpcat.io account) — forwards
// mcp_tool_call / mcp_initialize / mcp_tools_list events to PostHog.
// Gated on POSTHOG_API_KEY env var: missing key = no telemetry, no errors.
// Same Book Power PostHog project (id 432375) as the bookpower.org website,
// so server + browser events live in one project for joint funnels.
const POSTHOG_API_KEY = process.env.POSTHOG_API_KEY;

function createServer(): McpServer {
  const server = new McpServer({
    name: 'plurality',
    version: '0.1.0',
  });

  if (POSTHOG_API_KEY) {
    mcpcat.track(server, null, {
      exporters: {
        posthog: {
          type: 'posthog',
          apiKey: POSTHOG_API_KEY,
          host: 'https://us.i.posthog.com',
        },
      },
    });
  }

  // === ROUTING TOOLS (2) ===

  server.registerTool('start_analysis', {
    title: 'Start Plurality Analysis',
    description: 'Branching entry-point. Pick a situation type to get a scaffold of key questions plus recommended next tools, all grounded in Weyl, Tang & ⿻ Community\'s Plurality.',
    inputSchema: {
      situation: z.enum([
        'diagnose_monist_atomist',
        'design_plural_system',
        'name_failure_mode',
        'exploring',
      ]).describe('The kind of analysis you need to run.'),
    },
  }, async ({ situation }) => {
    const scaffolds: Record<string, { questions: string[]; next_tools: string[]; framing: string }> = {
      diagnose_monist_atomist: {
        framing: 'A digital system or governance proposal is leaning toward monist (technocratic centralization, "AI replaces democracy") or atomist (libertarian market-only, "crypto replaces democracy") rather than ⿻ (plurality). Goal: name the failure mode, surface ⿻ alternatives.',
        questions: [
          'Does the proposal collapse social diversity into a single optimization target (monist) or atomize into individual market actors with no group/social layer (atomist)?',
          'Whose voices, intersectional identities, or social ties are erased by the design?',
          'What domain is this (online_community, federated_network, dao, public_infrastructure, workplace, movement, state)?',
          'Where is the ⿻ alternative — does the design recognize partially-overlapping groups, intersectional identities, and cross-cutting cooperation?',
        ],
        next_tools: ['diagnose_monist_atomist', 'find_failure_mode', 'suggest_governance_forms', 'list_policy_strategies'],
      },
      design_plural_system: {
        framing: 'You want to design a digital-democracy / civic-tech / governance system on ⿻ principles. Goal: assess against Plurality\'s structural requirements (rights OS, association, augmented deliberation, plural voting, social markets), surface ⿻ governance forms and Taiwan-tested precedents.',
        questions: [
          'What is the community? Who participates, and what are the partially-overlapping social groupings (Simmel-style intersections)?',
          'What domain (online_community, federated_network, platform_cooperative, dao, public_infrastructure, workplace, movement, state)?',
          'What scale (small group, mid-size org, network of networks, public)?',
          'Which Plurality layer applies — identity (Ch. 4-1), association (Ch. 4-2), commerce/trust (Ch. 4-3), contract/property (Ch. 4-4), deliberation (Ch. 5-4), administration (Ch. 5-5), voting (Ch. 5-6), markets (Ch. 5-7)?',
          'What ⿻ primitives have you considered (quadratic voting, polis-style clustering, augmented deliberation, partial common ownership, etc.)?',
        ],
        next_tools: ['assess_plural_design', 'find_precedent_case', 'suggest_governance_forms'],
      },
      name_failure_mode: {
        framing: 'Something in a digital system feels broken in a counter-⿻ way (centralizing, atomizing, engagement-maximizing, surveillance-extractive). Goal: match it to one of Plurality\'s named failure-mode patterns or instances.',
        questions: [
          'What is the visible symptom (engagement-maximization, surveillance capture, captured DAO, monist AI-replacement, atomist crypto-libertarianism, digital authoritarianism)?',
          'Is this a one-off incident (instance) or a recurring pattern across systems (pattern)?',
          'Who benefits from the current arrangement, and at whose expense?',
          'What domain?',
        ],
        next_tools: ['find_failure_mode', 'apply_plurality_reframe', 'find_quote'],
      },
      exploring: {
        framing: 'You want to learn or browse Plurality\'s framing without a specific case in mind.',
        questions: [
          'A theme to explore (⿻ plurality, augmented deliberation, post-symbolic communication, plural voting, social markets, rights OS)?',
          'A domain to anchor in (state — Taiwan; federated_network; dao; platform_cooperative)?',
          'A specific concept to define (e.g., "intersectional social identity", "Yushan view", "lost dao")?',
        ],
        next_tools: ['get_glossary_term', 'find_quote', 'apply_plurality_reframe', 'find_precedent_case'],
      },
    };

    const scaffold = scaffolds[situation];
    return {
      content: [{ type: 'text' as const, text: JSON.stringify(scaffold, null, 2) }],
    };
  });

  server.registerTool('suggest_next_step', {
    title: 'Suggest Next Tool',
    description: 'Given a brief context summary and which tools have already been called, suggest the next tool with rationale.',
    inputSchema: {
      context_summary: z.string().describe('1-3 sentences describing the user\'s situation and what has been gathered so far.'),
      tools_used_so_far: z.array(z.string()).optional().describe('Tool names already called.'),
    },
  }, async ({ context_summary, tools_used_so_far }) => {
    const ctx = context_summary.toLowerCase();
    const used = new Set(tools_used_so_far ?? []);

    type Suggestion = { tool: string; rationale: string };
    const candidates: Suggestion[] = [];

    if (!used.has('diagnose_monist_atomist') && /(monist|atomist|technocrat|libertarian|centralize|optimize|engagement|surveill|captur)/.test(ctx)) {
      candidates.push({ tool: 'diagnose_monist_atomist', rationale: 'Classify against Plurality\'s monist / atomist / ⿻-plural rubric.' });
    }
    if (!used.has('find_failure_mode') && /(pattern|recurring|happen.*again|same problem|engagement|surveil|captur|coloniz|monist|atomist)/.test(ctx)) {
      candidates.push({ tool: 'find_failure_mode', rationale: 'Match the dynamics to a named counter-⿻ failure pattern.' });
    }
    if (!used.has('assess_plural_design') && /(design|build|govern.*better|deliberat|voting|identity|social market)/.test(ctx)) {
      candidates.push({ tool: 'assess_plural_design', rationale: 'Walk through Plurality\'s structural layers (rights OS / association / deliberation / voting / social markets) for a design.' });
    }
    if (!used.has('find_precedent_case') && /(community|platform|taiwan|polis|v-?taiwan|cooperat|dao|federat|fediverse|g0v)/.test(ctx)) {
      candidates.push({ tool: 'find_precedent_case', rationale: 'Surface analogous Taiwan-tested or global ⿻ cases.' });
    }
    if (!used.has('suggest_governance_forms') && /(quadratic|plural.*vot|sortition|deliberat|conviction|prediction|how.*govern|primitive|form)/.test(ctx)) {
      candidates.push({ tool: 'suggest_governance_forms', rationale: 'Surface ⿻ primitives (quadratic voting, augmented deliberation, plural voting, etc.) that fit the situation.' });
    }
    if (!used.has('apply_plurality_reframe') && /(market.*decid|ai.*replace|crypto.*replace|technocrat|libertarian|neutral|apolitical|engagement.*metric)/.test(ctx)) {
      candidates.push({ tool: 'apply_plurality_reframe', rationale: 'Reframe a monist or atomist framing into a ⿻-plural framing.' });
    }
    if (!used.has('list_policy_strategies') && (used.has('find_failure_mode') || used.has('diagnose_monist_atomist'))) {
      candidates.push({ tool: 'list_policy_strategies', rationale: 'You have a diagnosis — surface the policy/regulatory moves that counter it at scale.' });
    }
    if (!used.has('find_quote')) {
      candidates.push({ tool: 'find_quote', rationale: 'Pull a grounding Plurality passage for citation or framing.' });
    }
    if (!used.has('get_glossary_term')) {
      candidates.push({ tool: 'get_glossary_term', rationale: 'Look up a specific Plurality term (⿻, augmented deliberation, lost dao, Yushan view, etc.).' });
    }

    const top = candidates[0] ?? { tool: 'start_analysis', rationale: 'No clear signal — restart with start_analysis to pick a branch.' };
    return {
      content: [{ type: 'text' as const, text: JSON.stringify({ suggested: top, alternatives: candidates.slice(1, 4) }, null, 2) }],
    };
  });

  // === DIAGNOSTIC TOOLS (4) ===

  server.registerTool('diagnose_monist_atomist', {
    title: 'Diagnose against Plurality\'s framing',
    description: 'Given a description of a digital system / governance proposal, classify it as plural_⿻ / monist_technocratic / atomist_libertarian / unclear. Heuristic — Plurality (Ch. 1-3) argues that monist and atomist are the two failure modes that ⿻ aims to transcend.',
    inputSchema: {
      description: z.string().describe('1-3 paragraph description of the system, design, or governance arrangement.'),
    },
  }, async ({ description }) => {
    const d = description.toLowerCase();
    const nd = d.replace(/\b(no|cannot|can'?t|not|without|never|lack(?:s|ing)?|absence of)\s+(\w+(?:\s+\w+){0,3})/g, ' ');

    const hasMonist = /(centraliz|single.*optimiz|ai.*replace.*democracy|technocrat|algorithm.*decid|expert.*rule|benevolent.*dictator|engagement.*maximiz|surveillance|china.*model|prc.*model|authorit)/.test(d);
    const hasAtomist = /(crypto.*replace.*democracy|libertarian|market.*only|atomiz|individual.*sovereign|no.*social|just.*market|laissez|free.*market.*alone|whale|plutocrat)/.test(d);

    const hasPluralIdentity = /(intersection|partially.*overlap|social.*identity|simmel|federated.*identity|multiple.*affiliat|identity.*network)/.test(nd);
    const hasPluralVoting = /(quadratic|plural.*vot|conviction.*vot|polis|cluster.*consensus|liquid.*dem|delegat)/.test(nd);
    const hasPluralDeliberation = /(deliberat|augmented.*deliberation|consensus.*build|v-?taiwan|g0v|civic.*hack)/.test(nd);
    const hasPluralMarkets = /(quadratic.*fund|partial.*common|harberger|social.*market|data.*union|data.*coalition|depreciating.*license)/.test(nd);
    const hasFederation = /(federat|subsidiarity|nested|modular|local.*control|nested.*govern)/.test(nd);

    const pluralScore = [hasPluralIdentity, hasPluralVoting, hasPluralDeliberation, hasPluralMarkets, hasFederation].filter(Boolean).length;
    const monistAtomistScore = [hasMonist, hasAtomist].filter(Boolean).length;

    let classification: 'plural_⿻' | 'monist_technocratic' | 'atomist_libertarian' | 'unclear' = 'unclear';
    const reasons: string[] = [];

    const detected: string[] = [];
    if (hasPluralIdentity) detected.push('intersectional identity');
    if (hasPluralVoting) detected.push('plural-voting primitives');
    if (hasPluralDeliberation) detected.push('augmented deliberation');
    if (hasPluralMarkets) detected.push('social-markets primitives');
    if (hasFederation) detected.push('federated/subsidiary structure');

    if (pluralScore >= 2 && monistAtomistScore === 0) {
      classification = 'plural_⿻';
      reasons.push(`⿻ features present (${detected.join(' + ')}); no monist/atomist collapse detected. Aligned with Plurality framing.`);
    } else if (hasMonist && !hasAtomist) {
      classification = 'monist_technocratic';
      reasons.push('Centralization / technocracy / engagement-maximization signals dominate. Plurality (Ch. 1-3) names this as the *monist* failure mode — collapse of social diversity into a single optimization target. The ⿻ alternative: federation, intersectional identity, deliberation rather than algorithmic verdict.');
    } else if (hasAtomist && !hasMonist) {
      classification = 'atomist_libertarian';
      reasons.push('Market-only / libertarian / individual-sovereign signals dominate. Plurality (Ch. 1-3) names this as the *atomist* failure mode — erasure of social and group layers between individual and global market. The ⿻ alternative: data unions, social markets, partial-common-ownership, plural voting that respects partially-overlapping affiliations.');
    } else if (hasMonist && hasAtomist) {
      classification = 'unclear';
      reasons.push('Both monist and atomist signals present — possibly a Big-Tech-style atomism-of-users-under-monist-platform-control. Probe further with find_failure_mode.');
    } else {
      reasons.push(`Insufficient signal (${detected.length} ⿻ features, ${monistAtomistScore} counter-⿻ signals). Try assess_plural_design for a fuller rubric.`);
    }

    return {
      content: [{ type: 'text' as const, text: JSON.stringify({
        classification,
        plural_affordances_detected: {
          intersectional_identity: hasPluralIdentity,
          plural_voting: hasPluralVoting,
          augmented_deliberation: hasPluralDeliberation,
          social_markets: hasPluralMarkets,
          federation_subsidiarity: hasFederation,
        },
        counter_plural_signals: { monist: hasMonist, atomist: hasAtomist },
        reasoning: reasons.join(' '),
        caveat: 'Heuristic match against Plurality\'s framing, not a definitive judgment. ⿻ design recognizes partially-overlapping groups and intersectional identities — both monist (collapse to one) and atomist (atomize to isolated individuals) miss this.',
        next_tool_hint: classification === 'monist_technocratic' || classification === 'atomist_libertarian'
          ? 'Try find_failure_mode to identify the specific pattern, then suggest_governance_forms for ⿻ primitives.'
          : classification === 'plural_⿻'
          ? 'Try find_precedent_case for sibling ⿻ systems to learn from, or assess_plural_design for a fuller rubric.'
          : 'Try start_analysis with situation="exploring" or assess_plural_design to find what\'s missing.',
      }, null, 2) }],
    };
  });

  server.registerTool('find_failure_mode', {
    title: 'Find Failure Mode Patterns',
    description: 'Match a situation to one or more named counter-⿻ failure-mode patterns from Plurality. Each pattern can have associated instances (specific historical cases). Returns up to 3 patterns plus their instances.',
    inputSchema: {
      domain: z.string().optional().describe('Domain hint (online_community, federated_network, platform_cooperative, dao, public_infrastructure, workplace, movement, state).'),
      signs: z.array(z.string()).optional().describe('Observed signs / dynamics, free text.'),
      kind: z.enum(['pattern', 'instance', 'any']).optional().describe('Filter by entry kind. Default: any.'),
    },
  }, async ({ domain, signs, kind }) => {
    const signsBlob = (signs ?? []).join(' ').toLowerCase();
    const domainKey = (domain ?? '').toLowerCase();
    const kindFilter = kind ?? 'any';

    const candidates = FAILURE_MODES.filter(f => kindFilter === 'any' || f.kind === kindFilter);

    const scored = candidates.map(f => {
      let score = 0;
      if (domainKey && f.domain_examples) {
        for (const dKey of Object.keys(f.domain_examples)) {
          if (dKey.toLowerCase().includes(domainKey) || domainKey.includes(dKey.toLowerCase())) score += 3;
        }
      }
      if (signsBlob) {
        const haystack = `${f.name} ${f.signature} ${f.example}`.toLowerCase();
        for (const word of signsBlob.split(/\s+/).filter(w => w.length > 3)) {
          if (haystack.includes(word)) score += 1;
        }
      }
      return { f, score };
    }).sort((a, b) => b.score - a.score);

    const topPatterns = scored.filter(s => s.score > 0 && s.f.kind === 'pattern').slice(0, 3).map(s => s.f);
    const instancesForTop = topPatterns.flatMap(p =>
      FAILURE_MODES.filter(f => f.kind === 'instance' && f.pattern_ids.includes(p.id))
    );
    const topInstances = scored.filter(s => s.score > 0 && s.f.kind === 'instance' && !instancesForTop.find(i => i.id === s.f.id)).slice(0, 3).map(s => s.f);

    if (topPatterns.length === 0 && topInstances.length === 0) {
      const list = FAILURE_MODES.filter(f => f.kind === 'pattern').map(f => `  ${f.id} — ${f.name}`).join('\n');
      return { content: [{ type: 'text' as const, text: `No clear match. Available counter-⿻ patterns:\n${list}` }] };
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify({
      patterns: topPatterns,
      instances_of_top_patterns: instancesForTop,
      other_matched_instances: topInstances,
    }, null, 2) }] };
  });

  server.registerTool('find_precedent_case', {
    title: 'Find Precedent Cases',
    description: 'Surface 3-5 ⿻ cases from Plurality (Taiwan civic-tech, global digital democracy, OSS commons, etc.) that resemble a situation, by domain and concept.',
    inputSchema: {
      domain: z.string().describe('Domain (online_community, federated_network, platform_cooperative, dao, public_infrastructure, workplace, movement, state).'),
      what_governed: z.string().optional().describe('What is being governed (e.g., "deliberation", "moderation", "funding allocation", "identity").'),
      scale: z.string().optional().describe('Scale hint: small group, mid-size org, network of networks, public.'),
    },
  }, async ({ domain, what_governed, scale }) => {
    const dKey = domain.toLowerCase();
    const candidates = CASES.filter(c =>
      c.domain.toLowerCase().includes(dKey) || dKey.includes(c.domain.toLowerCase())
    );

    const scored = candidates.map(c => {
      let score = 1;
      if (what_governed) {
        const blob = `${c.brief} ${c.community} ${c.democratic_features.join(' ')} ${c.lessons_or_failures}`.toLowerCase();
        for (const word of what_governed.toLowerCase().split(/\s+/).filter(w => w.length > 3)) {
          if (blob.includes(word)) score += 2;
        }
      }
      if (scale) {
        const blob = `${c.brief} ${c.community}`.toLowerCase();
        if (blob.includes(scale.toLowerCase())) score += 1;
      }
      return { c, score };
    }).sort((a, b) => b.score - a.score);

    const top = scored.slice(0, 5).map(s => s.c);
    if (top.length === 0) {
      return { content: [{ type: 'text' as const, text: `No cases in domain "${domain}". Available domains: ${[...new Set(CASES.map(c => c.domain))].join(', ')}` }] };
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify(top, null, 2) }] };
  });

  server.registerTool('list_policy_strategies', {
    title: 'List Policy Strategies',
    description: 'Surface policy / regulatory / movement moves from Plurality that counter a given failure mode or operate in a given domain (digital ministries, public-interest media funding, data unions, plurality-pluralism education, public AI compute, etc.).',
    inputSchema: {
      failure_mode_id: z.string().optional().describe('Specific failure_mode ID to find counters for.'),
      domain: z.string().optional().describe('Domain hint.'),
    },
  }, async ({ failure_mode_id, domain }) => {
    let strategies = POLICY_STRATEGIES;
    if (failure_mode_id) {
      strategies = strategies.filter(s => s.target_failure_mode_ids.includes(failure_mode_id));
      if (strategies.length === 0) {
        const ids = POLICY_STRATEGIES.flatMap(s => s.target_failure_mode_ids);
        return { content: [{ type: 'text' as const, text: `No strategies tagged for "${failure_mode_id}". Tagged failure-mode IDs across all strategies: ${[...new Set(ids)].join(', ')}` }] };
      }
    }
    if (domain) {
      const dKey = domain.toLowerCase();
      strategies = strategies.filter(s => {
        const exampleCases = s.example_case_ids.map(id => CASES.find(c => c.id === id)).filter(Boolean);
        return exampleCases.some(c => c!.domain.toLowerCase().includes(dKey));
      });
    }
    if (strategies.length === 0) {
      return { content: [{ type: 'text' as const, text: 'No matching strategies. Call without filters to see all.' }] };
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify(strategies, null, 2) }] };
  });

  // === DESIGN TOOLS (3) ===

  server.registerTool('assess_plural_design', {
    title: 'Assess Against Plurality\'s Structural Layers',
    description: 'Returns Plurality\'s structural layers (rights OS, association, deliberation, plural voting, social markets, federation) as a fillable rubric. The agent walks through with the user.',
    inputSchema: {
      space_description: z.string().optional().describe('Optional 1-3 paragraph description of the system being designed or assessed. If provided, surfaces governance forms and cases that resemble it.'),
    },
  }, async ({ space_description }) => {
    const requirements = [
      {
        name: 'Intersectional Identity (Rights OS)',
        description: 'Plurality (Ch. 4-1) argues identity is not a single token but a *network* of partially-overlapping social affiliations (Simmel). Systems should let participants surface, combine, and present subsets of their intersectional identity rather than collapsing to a single state-issued credential.',
        diagnostic_questions: [
          'Can a participant have multiple, partially-overlapping identity affiliations (state, community, professional, etc.)?',
          'Are identity attestations issued by multiple sources (vs. a single state-issued ID)?',
          'Can the participant choose which subset to reveal in a given context?',
        ],
      },
      {
        name: 'Association (Plurality Publics)',
        description: 'Plurality (Ch. 4-2) builds on Dewey: "publics" form around shared consequences, not predefined membership. Systems should support *plurality publics* — partially-overlapping groups that can deliberate, decide, and act with appropriate scope.',
        diagnostic_questions: [
          'Can partially-overlapping groups form, dissolve, and reform without bureaucratic friction?',
          'Can a public be defined by who-is-affected-by-X rather than by predefined membership?',
          'Are tools for cross-public deliberation in place (e.g., delegation, federation)?',
        ],
      },
      {
        name: 'Augmented Deliberation',
        description: 'Plurality (Ch. 5-4) — deliberation augmented by AI/clustering (Polis-style) surfaces cross-group consensus and divisive statements without collapsing diversity. Systems should treat deliberation as the primary site of legitimate decision-making, not a consultative wrapper around predetermined outcomes.',
        diagnostic_questions: [
          'Is deliberation binding or merely consultative?',
          'Are tools in place (clustering, statement-level voting) to surface rough consensus across factions?',
          'Can outcomes be revised based on deliberation outputs?',
        ],
      },
      {
        name: 'Plural Voting',
        description: 'Plurality (Ch. 5-6) — voting primitives that account for intensity (quadratic voting), partially-overlapping affiliations (correlation discounts), delegation chains (liquid democracy), and time (conviction voting) move beyond one-person-one-vote without collapsing into plutocracy.',
        diagnostic_questions: [
          'Does the voting system account for voter intensity, not just direction?',
          'Are correlations between voters (groupings, factions) accounted for in tallying?',
          'Are delegation, liquid voting, or time-weighted variants available where appropriate?',
        ],
      },
      {
        name: 'Social Markets',
        description: 'Plurality (Ch. 5-7) — markets aware of social structure (data unions/coalitions, partial common ownership, depreciating licenses, quadratic funding) avoid both atomist laissez-faire and monist central planning.',
        diagnostic_questions: [
          'Where the system uses markets, do the markets account for group/social externalities and dependencies?',
          'Are mechanisms in place to redistribute returns to the relevant social collectives (data unions, common pools)?',
          'Are funding mechanisms (e.g., quadratic funding) aware of group affiliation to avoid Sybil-style capture?',
        ],
      },
      {
        name: 'Federation / Subsidiarity',
        description: 'Plurality runs through: ⿻ scales by federating rather than centralizing. Decisions are taken at the smallest competent scope; cross-scope decisions go through structured federation.',
        diagnostic_questions: [
          'Is each decision taken at the smallest competent scope?',
          'Are there structured federation primitives between scopes (delegation, treaty, modular policy)?',
          'Does the system avoid monolithic top-down control AND avoid fully atomized isolation?',
        ],
      },
    ];

    const relevantGovernanceForms = GOVERNANCE_FORMS.slice(0, 8).map(g => ({
      id: g.id,
      name: g.name,
      brief: g.description.slice(0, 160),
    }));

    return {
      content: [{ type: 'text' as const, text: JSON.stringify({
        instructions: 'Walk through the six layers with the user. For each, ask the diagnostic_questions and record whether the system embodies, partially embodies, or lacks the layer. At the end, summarize gaps and call suggest_governance_forms to surface ⿻ primitives.',
        layers: requirements,
        relevant_governance_forms: relevantGovernanceForms,
        space_description_received: space_description ?? '(none)',
      }, null, 2) }],
    };
  });

  server.registerTool('find_similar_case', {
    title: 'Find Similar Cases (and Their Governance Designs)',
    description: 'Like find_precedent_case but framed for design — returns cases in the same domain along with the ⿻ features and governance forms they use, to learn from.',
    inputSchema: {
      domain: z.string().describe('Domain (online_community, federated_network, platform_cooperative, dao, public_infrastructure, workplace, movement, state).'),
      what_governed: z.string().describe('What is being governed.'),
      scale: z.string().optional().describe('Scale hint.'),
    },
  }, async ({ domain, what_governed, scale }) => {
    const dKey = domain.toLowerCase();
    const wKey = what_governed.toLowerCase();
    const scored = CASES.map(c => {
      let score = 0;
      if (c.domain.toLowerCase().includes(dKey) || dKey.includes(c.domain.toLowerCase())) score += 3;
      const blob = `${c.brief} ${c.democratic_features.join(' ')} ${c.lessons_or_failures}`.toLowerCase();
      for (const word of wKey.split(/\s+/).filter(w => w.length > 3)) {
        if (blob.includes(word)) score += 2;
      }
      if (scale) {
        if (`${c.brief} ${c.community}`.toLowerCase().includes(scale.toLowerCase())) score += 1;
      }
      return { c, score };
    }).filter(s => s.score > 0).sort((a, b) => b.score - a.score);

    const top = scored.slice(0, 5).map(s => ({
      id: s.c.id,
      name: s.c.name,
      domain: s.c.domain,
      brief: s.c.brief,
      community: s.c.community,
      democratic_features: s.c.democratic_features,
      governance_form_ids: s.c.governance_form_ids,
      lessons_or_failures: s.c.lessons_or_failures,
      source_chapter: s.c.source_chapter,
    }));

    if (top.length === 0) {
      return { content: [{ type: 'text' as const, text: `No matches. Available domains: ${[...new Set(CASES.map(c => c.domain))].join(', ')}` }] };
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify(top, null, 2) }] };
  });

  server.registerTool('suggest_governance_forms', {
    title: 'Suggest Governance Forms',
    description: 'Surface ⿻ primitives (quadratic voting, augmented deliberation, polis-clustering, plural voting, partial common ownership, data unions, etc.) that fit a need, by failure mode they counter or by domain.',
    inputSchema: {
      countering_failure_mode_id: z.string().optional().describe('Failure mode you want to counter (e.g., "monist-technocracy", "atomist-libertarianism", "engagement-maximization").'),
      domain: z.string().optional().describe('Domain hint.'),
      max_results: z.number().int().min(1).max(15).optional().describe('Max forms to return (default 5, hard cap 15).'),
    },
  }, async ({ countering_failure_mode_id, domain, max_results }) => {
    const cap = Math.min(max_results ?? 5, 15);
    let forms = GOVERNANCE_FORMS;

    if (countering_failure_mode_id) {
      forms = forms.filter(g => g.countered_failure_mode_ids.includes(countering_failure_mode_id));
      if (forms.length === 0) {
        const ids = GOVERNANCE_FORMS.flatMap(g => g.countered_failure_mode_ids);
        return { content: [{ type: 'text' as const, text: `No governance forms tagged as countering "${countering_failure_mode_id}". Tagged failure-mode IDs: ${[...new Set(ids)].join(', ')}` }] };
      }
    }

    if (domain) {
      const dKey = domain.toLowerCase();
      forms = forms.filter(g => {
        const exampleCases = g.example_case_ids.map(id => CASES.find(c => c.id === id)).filter(Boolean);
        return exampleCases.some(c => c!.domain.toLowerCase().includes(dKey));
      });
    }

    const top = forms.slice(0, cap);
    if (top.length === 0) {
      return { content: [{ type: 'text' as const, text: 'No matching governance forms.' }] };
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify(top, null, 2) }] };
  });

  // === REFERENCE TOOLS (4) ===

  server.registerTool('apply_plurality_reframe', {
    title: 'Apply ⿻ Plurality Reframe',
    description: 'Given a monist (technocratic / engagement-maximizing) or atomist (market-only / crypto-libertarian) framing, return the ⿻ reframe with a grounding Plurality passage. Plurality\'s central move is to recognize partially-overlapping social groups and intersectional identities — neither one-thing nor isolated-individuals.',
    inputSchema: {
      monist_or_atomist_framing: z.string().describe('A monist or atomist framing. E.g., "AI can replace deliberation", "free markets solve coordination", "we need a benevolent dictator", "crypto governance is enough".'),
    },
  }, async ({ monist_or_atomist_framing }) => {
    const m = monist_or_atomist_framing.toLowerCase();

    const candidateQuotes = QUOTES.filter(q => {
      const blob = `${q.text} ${q.themes.join(' ')}`.toLowerCase();
      return q.themes.some(t => /(plurality|⿻|monist|atomist|augmented-deliberation|intersectional|lost-dao)/.test(t.toLowerCase()))
        || /(⿻|plurality|augmented deliberation|intersectional|monist|atomist)/.test(blob);
    }).slice(0, 1);

    let reframe = '';
    if (/(ai.*replace|algorithm.*decid|model.*decide|ml.*govern|machine.*choose)/.test(m)) {
      reframe = `Plurality (Ch. 1-3, "Information Technology and Democracy") reframes "AI replaces deliberation" as the *monist* failure — collapsing diversity into one optimization target. The ⿻ alternative: AI *augments* deliberation (Ch. 5-4 "Augmented Deliberation") — Polis-style clustering surfaces consensus across factions without collapsing them, and the model is in service of plural publics rather than replacing them.`;
    } else if (/(free.*market|laissez|libertarian|crypto.*govern|markets.*solve|whale.*vote|token.*vote)/.test(m)) {
      reframe = `Plurality (Ch. 1-3) reframes "markets solve coordination" as the *atomist* failure — erasing the social and group layers between individual and global market. Plurality's response (Ch. 5-7 "Social Markets"): markets that recognize partial common ownership, data unions, depreciating licenses, and quadratic funding — markets aware of group affiliation, not blind to it. Crypto-only governance often collapses to whale plutocracy via the same erasure.`;
    } else if (/(benevolent dictator|founder.*lead|strong.*leader|technocrat|expert.*rule)/.test(m)) {
      reframe = `Plurality (Ch. 1-3) reframes "we need a benevolent dictator" as monist by default — assumes a single decision-maker can optimize for the whole. The ⿻ alternative: federate decisions to the smallest competent scope (subsidiarity), use augmented deliberation for cross-scope decisions, recognize that legitimate governance emerges from plural publics not founder fiat.`;
    } else if (/(neutral|apolitical|just.*technical|engagement.*metric|algorithm.*neutral|optimize)/.test(m)) {
      reframe = `Plurality reframes "neutral / apolitical / engagement-maximizing" framings as concealed monist choices — there is no neutral metric. The ⿻ alternative: surface the political design choices (whose voice gets weighted, which intersectional affiliations are recognized, what consensus tools are available) and put them under plural-public deliberation rather than treating them as natural.`;
    } else if (/(scale|too big|cant.*all.*decide|dao.*plutocrat|whale|sybil)/.test(m)) {
      reframe = `Plurality reframes the "scale" objection through federation and ⿻ primitives. The ⿻ alternative: federate to the smallest competent scope, account for correlations between voters (so a coordinated faction can't dominate via Sybil-style multiplication), use quadratic funding for matching that respects group affiliation. Scale doesn't require collapsing into monist optimization.`;
    } else if (/(individual.*sovereign|self.*sovereign|just.*personal|no.*social)/.test(m)) {
      reframe = `Plurality reframes "individual sovereignty alone" as atomist — Simmel's insight (Ch. 3-2) is that identity is constituted by partially-overlapping social affiliations. The ⿻ alternative (Ch. 4-1, "Identity and Personhood"): intersectional social identity, where individuals are nodes in webs of group affiliation, and rights/credentials/votes can be partial and overlapping accordingly.`;
    } else {
      reframe = `No specific reframe heuristic matched. General ⿻ move: from monist (one optimization target, technocracy, engagement metrics) and atomist (atomized individuals in pure markets) → to ⿻ (partially-overlapping social groups, intersectional identity, augmented deliberation, plural voting, social markets, federation). See Ch. 3 "What is Plurality" for the framing.`;
    }

    return {
      content: [{ type: 'text' as const, text: JSON.stringify({
        monist_or_atomist_framing,
        plurality_reframe: reframe,
        grounding_quote: candidateQuotes[0] ?? null,
      }, null, 2) }],
    };
  });

  server.registerTool('get_glossary_term', {
    title: 'Get Glossary Term',
    description: 'Look up a Plurality vocabulary term: ⿻ (plurality), augmented deliberation, post-symbolic communication, intersectional social identity, plurality publics, Yushan view, lost dao, monist, atomist, etc.',
    inputSchema: {
      term: z.string().describe('The term to look up.'),
    },
  }, async ({ term }) => {
    const tKey = term.toLowerCase().trim();
    const exact = GLOSSARY.find(g => g.term.toLowerCase() === tKey);
    if (exact) {
      return { content: [{ type: 'text' as const, text: JSON.stringify(exact, null, 2) }] };
    }
    const partial = GLOSSARY.filter(g => g.term.toLowerCase().includes(tKey) || tKey.includes(g.term.toLowerCase()));
    if (partial.length > 0) {
      return { content: [{ type: 'text' as const, text: JSON.stringify({ note: `No exact match for "${term}". Closest:`, matches: partial.slice(0, 5) }, null, 2) }] };
    }
    const list = GLOSSARY.slice(0, 30).map(g => g.term).join(', ');
    return { content: [{ type: 'text' as const, text: `Term "${term}" not found. Sample: ${list} (${GLOSSARY.length} total — try search_book for free-text matches)` }] };
  });

  server.registerTool('find_quote', {
    title: 'Find a Plurality Quote on a Theme',
    description: 'Returns up to 3 verbatim Plurality passages on a theme. For citation in writeups. Each result includes attribution. The book is CC0 so quotes carry no license restriction, but include attribution as a scholarly norm.',
    inputSchema: {
      theme: z.string().describe('Theme keyword (e.g., "⿻", "plurality", "augmented-deliberation", "intersectional-identity", "monist", "atomist", "lost-dao", "vTaiwan").'),
      max_results: z.number().optional().describe('Max results (default 3, hard cap 5).'),
    },
  }, async ({ theme, max_results }) => {
    const cap = Math.min(max_results ?? 3, 5);
    const tKey = theme.toLowerCase();
    const matches = QUOTES.filter(q =>
      q.themes.some(t => t.toLowerCase().includes(tKey) || tKey.includes(t.toLowerCase()))
      || q.text.toLowerCase().includes(tKey)
    ).slice(0, cap);

    if (matches.length === 0) {
      const themes = [...new Set(QUOTES.flatMap(q => q.themes))].sort();
      return { content: [{ type: 'text' as const, text: `No quotes on theme "${theme}". Available themes: ${themes.join(', ')}` }] };
    }
    const attribution_note = 'Each quote is from Weyl, Tang & ⿻ Community, *Plurality: The Future of Collaborative Technology and Democracy* (2024), CC0 license. Source: https://www.plurality.net. Cite full attribution per `source_attribution` field.';
    return { content: [{ type: 'text' as const, text: JSON.stringify({ matches, attribution_note }, null, 2) }] };
  });

  server.registerTool('search_book', {
    title: 'Search Across All Catalogs',
    description: 'Free-text search across cases, failure modes, governance forms, policy strategies, glossary, and quotes. Returns up to 10 results.',
    inputSchema: {
      query: z.string().describe('Search keyword or phrase.'),
      max_results: z.number().int().min(1).max(50).optional().describe('Max results (default 10).'),
    },
  }, async ({ query, max_results }) => {
    const results = searchAll(query, max_results ?? 10);
    if (results.length === 0) {
      return { content: [{ type: 'text' as const, text: `No matches for "${query}".` }] };
    }
    return { content: [{ type: 'text' as const, text: JSON.stringify(results, null, 2) }] };
  });

  return server;
}

// === START SERVER (dual stdio / HTTP) ===

async function startHttpServer() {
  const app = express();
  app.use(express.json());

  // Session lifecycle. Each session holds its own McpServer, so anything left
  // in this map stays resident for the life of the process. MCP clients are not
  // required to send DELETE /mcp before going away — Claude Code simply exits —
  // so `onclose` alone never reclaims them. Reconnects then accumulate until the
  // container is recycled. The idle sweep below is what actually bounds this.
  const SESSION_IDLE_MS = Number(process.env.MCP_SESSION_IDLE_MS ?? 10 * 60 * 1000);
  const SESSION_SWEEP_MS = Number(process.env.MCP_SESSION_SWEEP_MS ?? 60 * 1000);

  interface Session {
    transport: StreamableHTTPServerTransport;
    lastSeen: number;
  }

  const sessions = new Map<string, Session>();

  function dropSession(sessionId: string): void {
    const session = sessions.get(sessionId);
    if (!session) return;
    sessions.delete(sessionId);
    void session.transport.close().catch(() => {
      /* already torn down — nothing to reclaim */
    });
  }

  app.get('/health', (_req, res) => {
    res.json({
      status: 'ok',
      name: 'plurality',
      version: '0.1.0',
      sessions: sessions.size,
    });
  });

  app.all('/mcp', async (req, res) => {
    const existingSessionId = req.headers['mcp-session-id'] as string | undefined;

    if (existingSessionId) {
      const session = sessions.get(existingSessionId);
      if (session) {
        session.lastSeen = Date.now();
        await session.transport.handleRequest(req, res, req.body);
        return;
      }
      // Unknown id: swept by the idle reaper, or predates a restart. The spec
      // requires 404 here so the client knows to open a new session. Falling
      // through would mint a fresh transport that answers the non-initialize
      // request with "Server not initialized" (400) — a code clients are under
      // no obligation to recover from.
      if (!isInitializeRequest(req.body)) {
        res.status(404).json({
          jsonrpc: '2.0',
          error: { code: -32001, message: 'Session not found or expired' },
          id: null,
        });
        return;
      }
    }

    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => crypto.randomUUID(),
      // Register on the SDK's own hook rather than after handleRequest returns:
      // a client that disconnects mid-initialize would otherwise leave behind a
      // transport the sweeper never learns about.
      onsessioninitialized: (sessionId) => {
        sessions.set(sessionId, { transport, lastSeen: Date.now() });
      },
    });
    transport.onclose = () => {
      if (transport.sessionId) sessions.delete(transport.sessionId);
    };

    const sessionServer = createServer();
    await sessionServer.connect(transport);

    await transport.handleRequest(req, res, req.body);
  });

  const sweeper = setInterval(() => {
    const cutoff = Date.now() - SESSION_IDLE_MS;
    for (const [sessionId, session] of sessions) {
      if (session.lastSeen <= cutoff) dropSession(sessionId);
    }
  }, SESSION_SWEEP_MS);
  sweeper.unref();

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.error(`Plurality MCP Server running on HTTP port ${port}`);
  });
}

async function startStdioServer() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Plurality MCP Server running on stdio');
}

const isHttp = !!process.env.PORT;
(isHttp ? startHttpServer() : startStdioServer()).catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
