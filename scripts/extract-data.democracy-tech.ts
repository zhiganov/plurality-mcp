// =============================================================================
// extract-data.democracy-tech.ts
// -----------------------------------------------------------------------------
// Democracy-tech domain config + reference instance for the extraction pipeline.
// Pairs with extract-core.ts (which contains the book-agnostic infrastructure).
//
// This file is reusable across any book about democratic design of online
// governance — Nathan Schneider's *Governable Spaces*, this Plurality
// MCP (Weyl & Tang), DemocracyNext / sortition writing, platform-cooperative
// scholarship (Trebor Scholz et al.), etc. — they share the same Catalog set
// (cases / failure_modes / governance_forms / policy_strategies / glossary /
// quotes), the same DOMAINS enum (online_community / federated_network /
// platform_cooperative / DAO / etc.), and a substantially similar
// SYSTEM_PROMPT structure.
//
// To use this for a new democracy-tech book MCP:
//   1. Copy this file to book-power-output/mcp/<name>/scripts/extract-data.democracy-tech.ts
//      (also copy extract-core.ts as scripts/extract-core.ts).
//   2. Customize per-book bits:
//      - SOURCE: path to your book's source markdown
//      - SYSTEM_PROMPT: replace the *Governable Spaces* / Schneider references
//        with your book/author/edition; refine the inclusion criteria and
//        target sizes against your book's actual chapter structure
//      - extractTargetedFixedCardinality: drop or replace; the book's book
//        doesn't have a fixed-cardinality catalog like Ostrom's 8, but other
//        democracy-tech books might (e.g., a book that catalogs specific
//        democratic primitives could special-case that catalog)
//   3. Update package.json's "extract" script to point at this file.
//
// First reference instance (in development): book-power-output/mcp/governable-spaces/
// =============================================================================

import 'dotenv/config';
import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  type ToolSchema,
  type ExtractConfig,
  type DisciplineName,
  DISCIPLINES,
  entriesArray,
  chapterChunks,
  extractCatalog,
  dedupCatalog,
} from './extract-core.js';

// === BOOK-SPECIFIC CONFIG ===
// Adjust these for each democracy-tech book.

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SOURCE = join(ROOT, 'books', 'plurality.md');
const DATA_DIR = join(ROOT, 'src', 'data');
const CACHE_DIR = join(ROOT, '.extraction-cache');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY! });
const MODEL = 'claude-sonnet-4-6';

// === DEMOCRACY-TECH DOMAIN CONFIG ===
// Reusable across books on democratic design of online governance.

// Discipline: the book's *Governable Spaces* and most democracy-tech writing
// argues structurally and historically — not in MUST/SHOULD rules. The book's
// source text contains zero RFC-2119 modal markers; imposing them on the
// catalog produces reformulations that contradict the author (e.g., "Editors
// MUST reach consensus" for Wikipedia, when Schneider explicitly cites the
// Five Pillar that "Wikipedia has no firm rules"). See zhiganov/book-power#30
// for audit data and the architectural rationale. If a future democracy-tech
// book argues prescriptively, change this to 'prescriptive' for that book's
// MCP — it's a per-book choice, not a domain default.
const DISCIPLINE: DisciplineName = 'descriptive';
const D = DISCIPLINES[DISCIPLINE];

type Catalog =
  | 'cases'
  | 'failure_modes'
  | 'governance_forms'
  | 'policy_strategies'
  | 'glossary'
  | 'quotes';

// Substrates / settings where democratic design plays out. If your book
// emphasizes a different axis (e.g., specifically workplace democracy or
// specifically state-level governance), adjust this enum.
const DOMAINS = [
  'online_community',          // forums, chats, wikis, subreddits, Discord servers
  'federated_network',         // fediverse, ATProto, IndieWeb, federated wikis
  'platform_cooperative',      // worker- or user-owned platforms
  'dao',                       // on-chain governance, DAOs, token-voting orgs
  'public_infrastructure',     // public-option platforms, civic tech
  'workplace',                 // worker co-ops, sociocracy, holacracy in firms
  'movement',                  // social movements, mutual-aid networks
  'state',                     // government, municipal, regulatory
] as const;

const SYSTEM_PROMPT = `You are extracting structured catalog entries from E. Glen Weyl, Audrey Tang & ⿻ Community's "Plurality: The Future of Collaborative Technology and Democracy" (2024, CC0) for an MCP server that helps practitioners apply Plurality's framing to real situations.

Domain audience: civic technologists, digital-democracy builders, governance designers, deliberation facilitators, DAO designers, civic-tech researchers, public-interest technology funders. Tools that consume your output will help users diagnose monist/atomist failure modes, surface ⿻ (plurality) precedents from Taiwan and around the world, and propose ⿻ design moves grounded in Plurality.

Apply these conventions on every extraction:

EXTRACTION DISCIPLINE
- Stay close to the book's voice. Don't invent terminology Weyl & Tang wouldn't use. Don't soften their framing — if they call something "⿻ (plurality)", "augmented deliberation", "post-symbolic communication", "monist technocracy", or "atomist libertarianism," keep that.
- Preserve the ⿻ glyph wherever the book uses it (e.g., for "plurality" as a technical-political concept). Render as the literal Unicode "⿻" character, not "plurality" alone.
- Use stable kebab-case IDs that capture the essence (e.g., "augmented-deliberation", "v-taiwan-deliberation", "polis-clustering", "quadratic-voting", "g0v-civic-hacking", "monist-technocracy", "atomist-libertarianism", "post-symbolic-communication").
- A given case or concept may be referenced across multiple chapters. Use the same ID; the de-dup pass will handle merging.
- For source_chapter, use short forms based on the file naming: "Endorsements", "Preface", "Ch. 2-1", "Ch. 3-3", "Ch. 5-4", etc. (The book's source files are named like "5-4-augmented-deliberation.md" — strip to "Ch. 5-4".)
- Quote sparingly. Source quotes must be ≤200 words and verbatim. Skip the source_quote field if no especially strong passage applies.

${D.systemPromptSection}

DOMAIN ENUM (use exactly one per entry)
- "online_community" — forums, chats, wikis, subreddits, Discord servers, Slack workspaces
- "federated_network" — fediverse (Mastodon, Lemmy), ATProto (Bluesky), IndieWeb, federated wikis
- "platform_cooperative" — worker- or user-owned platforms (Stocksy, Up&Go, Resonate)
- "dao" — on-chain governance, DAOs, token-voting orgs
- "public_infrastructure" — public-option platforms, civic-tech, government-run social infra
- "workplace" — worker co-ops, sociocracy, holacracy applied within firms
- "movement" — social movements, mutual-aid networks, organizing infrastructure
- "state" — government, municipal, regulatory frameworks for online life

If something fits multiple domains, pick the most central one for that case.

INCLUSION CRITERIA (decide what's worth a distinct entry)

- **Cases:** a *named, distinct* civic-tech / digital-democracy example the book documents — must have a specific community + governance form + at least one ⿻ feature. Includes Taiwan-specific cases (vTaiwan, Polis, JOIN platform, g0v, Moedict, presidential hackathon), global digital-democracy cases (Estonia x-road, Iceland 2010 crowdsourced constitution, Decidim Barcelona, Pol.is Bowling Green) and ⿻ research / OSS projects (Wikidata, OpenStreetMap, Wikipedia, GitHub, Gitcoin Grants). Do NOT extract: generic "online community" without a named instance; sub-aspects of a case (don't split Polis's clustering, voting UI, and report generation — they're one Polis case); concepts described abstractly (those go in glossary).
- **Failure modes:** a *recognized pattern* of counter-⿻ design — including "monist technocracy" (AI replaces democracy), "atomist libertarianism" (markets/crypto replace democracy), "Big Tech engagement-maximization", "authoritarian digital governance" (PRC model), "surveillance capitalism", "captured-DAO plutocracy", etc. Tagged with kind: "pattern" for the pattern itself, kind: "instance" for a specific historical case the book names as exemplifying the pattern (e.g., "facebook-engagement-algorithm" as instance of engagement-maximization). One entry per pattern, plus key historical instances.
- **Governance forms:** a *named ⿻ primitive* with a clear participant action — quadratic voting, quadratic funding, plural voting, conviction voting, sortition, augmented deliberation, post-symbolic communication, immersive shared reality, prediction markets, social wealth funds, partial common ownership, depreciating licenses, polis-style clustering, federated identity (intersectional social identity), data coalitions / data unions, etc. Do NOT extract sub-applications across domains as separate forms.
- **Policy strategies:** a *named policy / movement / regulatory move* that embeds ⿻ at scale — digital-ministries with civic-tech mandates, public-interest media / journalism funding, antitrust as ⿻, public-option platforms, plurality-pluralism education, data unions and dignity, public AI compute, etc. The book's Ch. 6-* (workplace, health, media, environment, etc.) and Ch. 7-* (policy / from plurality to reality) are policy-rich.
- **Glossary:** a *book-coined or book-emphasized* term, named explicitly as a defined concept. Includes "⿻ (plurality)", "post-symbolic communication", "augmented deliberation", "intersectional social identity", "plurality publics", "creative collaborations", "adaptive administration", "rights os", "monist", "atomist", "lost dao", "yushan view", "g0v" (gov-zero), etc.
- **Quotes:** a *strong, citation-worthy passage* on a distinct theme. Aim for 3-5 quotes per chapter, thematic coverage not exhaustive.

TARGET SIZES (across the whole book — soft hints, not caps)

These are starting estimates based on the book's TOC; refine after first extraction if a catalog comes back wildly off. Plurality is a sweeping, ~7-section book; expect larger catalogs than a tightly-focused monograph.

- cases: ~45 distinct civic-tech / digital-democracy examples (Taiwan-centric + global)
- failure_modes: ~10 patterns + ~10-15 named instances = ~20-25 total
- governance_forms: ~20 distinct ⿻ primitives (the book is rich in these)
- policy_strategies: ~12 distinct moves
- glossary: ~40 distinct terms (Plurality coins many)
- quotes: ~50-70 distinct passages

If you find yourself extracting much more than these in a single chapter, you are likely splitting one concept across multiple slugs. Re-evaluate before emitting.

ENTRY KIND DISCRIMINATOR (failure_modes catalog only)

Each failure_modes entry MUST include a \`kind\` field:
- "pattern" — the recurring failure pattern itself (e.g., monist-technocracy, atomist-libertarianism, engagement-maximization). Use for entries that name and define the pattern.
- "instance" — a specific historical or contemporary case the book documents as exemplifying a pattern. Reference the parent pattern via the \`pattern_ids\` field.

cases stay positive (kind not needed). The cases / failure_modes split deliberately keeps ⿻ exemplars separate from counter-⿻ examples — the diagnostic tools in the MCP query them differently.

OUTPUT
You must call the provided tool with structured arguments. Do not narrate, do not output prose. If a chapter has no entries that fit the schema, call the tool with an empty array.`;

const TOOLS: Record<Catalog, ToolSchema> = {
  cases: {
    name: 'save_cases',
    description: 'Save democratic-medium examples the book documents — communities, platforms, networks, organizations practicing some form of democratic governance.',
    input_schema: entriesArray({
      type: 'object',
      properties: {
        id: { type: 'string', description: 'kebab-case stable ID' },
        name: { type: 'string' },
        domain: { type: 'string', enum: [...DOMAINS] },
        brief: { type: 'string', description: '1-2 sentence description' },
        community: { type: 'string', description: 'Who participates / who is governed' },
        governance_form_ids: { type: 'array', items: { type: 'string' }, description: 'IDs of governance_forms this case uses (1-3)' },
        democratic_features: { type: 'array', items: { type: 'string' }, description: `2-5 concrete democratic affordances ${D.fieldHint}` },
        lessons_or_failures: { type: 'string', description: 'What the book extracts from this case — what works, what doesn\'t, what scales, what doesn\'t' },
        source_chapter: { type: 'string' },
        source_quote: { type: 'string', description: 'Optional verbatim grounding passage, ≤200 words' },
      },
      required: ['id', 'name', 'domain', 'brief', 'community', 'governance_form_ids', 'democratic_features', 'lessons_or_failures', 'source_chapter'],
    }),
  },
  failure_modes: {
    name: 'save_failure_modes',
    description: 'Save recurring patterns of counter-democratic design (implicit feudalism, etc.) and canonical instances of those patterns.',
    input_schema: entriesArray({
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        kind: { type: 'string', enum: ['pattern', 'instance'], description: 'Discriminator: "pattern" for the recurring counter-democratic pattern itself; "instance" for a specific historical case exemplifying a pattern.' },
        signature: { type: 'string', description: 'Recognition heuristics: how do you spot this in the wild?' },
        example: { type: 'string', description: 'Canonical example from the book; for pattern entries this is illustrative, for instance entries this is the case itself' },
        pattern_ids: { type: 'array', items: { type: 'string' }, description: 'For instance entries: IDs of the parent pattern(s) this case exemplifies. Empty for pattern entries.' },
        domain_examples: {
          type: 'object',
          description: 'Map of Domain → array of example case names (1-3 per domain). Use the Domain enum keys.',
          additionalProperties: { type: 'array', items: { type: 'string' } },
        },
        countering_governance_form_ids: { type: 'array', items: { type: 'string' }, description: 'Governance form IDs that counter this failure mode (kebab-case). Empty if none surfaced yet.' },
        source_chapter: { type: 'string' },
      },
      required: ['id', 'name', 'kind', 'signature', 'example', 'pattern_ids', 'domain_examples', 'countering_governance_form_ids', 'source_chapter'],
    }),
  },
  governance_forms: {
    name: 'save_governance_forms',
    description: 'Save democratic primitives — named governance forms with clear participant actions (representational, sortition, federated, plural-voting, consensus, etc.).',
    input_schema: entriesArray({
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string', description: `2-4 sentences ${D.fieldHint}` },
        diagnostic_questions: { type: 'array', items: { type: 'string' }, description: `3-5 questions to assess whether this form fits a given situation. ${D.fieldHint}.` },
        countered_failure_mode_ids: { type: 'array', items: { type: 'string' }, description: 'Failure mode IDs this governance form counters' },
        example_case_ids: { type: 'array', items: { type: 'string' }, description: 'Case IDs that exemplify this form' },
        source_chapter: { type: 'string' },
      },
      required: ['id', 'name', 'description', 'diagnostic_questions', 'countered_failure_mode_ids', 'example_case_ids', 'source_chapter'],
    }),
  },
  policy_strategies: {
    name: 'save_policy_strategies',
    description: 'Save policy / movement / regulatory moves that embed democratic design at scale (governable-stack acts, antitrust as democracy-tech, public-option mandates, etc.).',
    input_schema: entriesArray({
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string', description: `2-4 sentences ${D.fieldHint}` },
        target_failure_mode_ids: { type: 'array', items: { type: 'string' }, description: 'Failure mode IDs this strategy targets at scale' },
        example_case_ids: { type: 'array', items: { type: 'string' }, description: 'Case IDs that exemplify this strategy in practice' },
        source_chapter: { type: 'string' },
      },
      required: ['id', 'name', 'description', 'target_failure_mode_ids', 'example_case_ids', 'source_chapter'],
    }),
  },
  glossary: {
    name: 'save_glossary',
    description: "Save the book's vocabulary terms (implicit feudalism, governable space, governable stack, modular politics, democratic mediation, metagovernance, etc.).",
    input_schema: entriesArray({
      type: 'object',
      properties: {
        term: { type: 'string' },
        definition: { type: 'string', description: "the book's framing, ≤120 words" },
        see_also: { type: 'array', items: { type: 'string' }, description: 'Related terms (lowercase)' },
        source_quote: { type: 'string' },
        source_chapter: { type: 'string' },
      },
      required: ['term', 'definition', 'see_also'],
    }),
  },
  quotes: {
    name: 'save_quotes',
    description: 'Save themed verbatim quotes from Plurality (Weyl, Tang & ⿻ Community 2024) for citation grounding.',
    input_schema: entriesArray({
      type: 'object',
      properties: {
        id: { type: 'string' },
        text: { type: 'string', description: 'Verbatim, ≤200 words' },
        themes: { type: 'array', items: { type: 'string' }, description: 'Lowercase tags like "implicit-feudalism", "democratic-mediation", "governable-stack", "platform-cooperatives", "metagovernance"' },
        source_chapter: { type: 'string' },
        source_attribution: { type: 'string', description: 'e.g., "Weyl, Tang & ⿻ Community, Plurality (2024, CC0), Ch. 5-4"' },
      },
      required: ['id', 'text', 'themes', 'source_chapter', 'source_attribution'],
    }),
  },
};

const FILE_HEADERS: Record<Catalog, string> = {
  cases: `import type { Case } from '../types.js';\n\nexport const CASES: Case[] = `,
  failure_modes: `import type { FailureMode } from '../types.js';\n\nexport const FAILURE_MODES: FailureMode[] = `,
  governance_forms: `import type { GovernanceForm } from '../types.js';\n\nexport const GOVERNANCE_FORMS: GovernanceForm[] = `,
  policy_strategies: `import type { PolicyStrategy } from '../types.js';\n\nexport const POLICY_STRATEGIES: PolicyStrategy[] = `,
  glossary: `import type { GlossaryTerm } from '../types.js';\n\nexport const GLOSSARY: GlossaryTerm[] = `,
  quotes: `import type { Quote } from '../types.js';\n\nexport const QUOTES: Quote[] = `,
};

// the book's book has no Part dividers (just 7 chapters); this set stays empty.
// If your book has Part dividers, add the catalogs that should skip them.
const SKIP_PART_DIVIDERS: Set<Catalog> = new Set();
const DEDUP_CATALOGS: Set<Catalog> = new Set(['cases', 'failure_modes', 'governance_forms', 'policy_strategies', 'glossary', 'quotes']);

const config: ExtractConfig<Catalog> = {
  client,
  model: MODEL,
  systemPrompt: SYSTEM_PROMPT,
  cacheDir: CACHE_DIR,
  tools: TOOLS,
  skipPartDividers: SKIP_PART_DIVIDERS,
  dedupCatalogs: DEDUP_CATALOGS,
};

// === BOOK-SPECIFIC TARGETED EXTRACTION ===
// the book's *Governable Spaces* doesn't have a fixed-cardinality catalog
// like Ostrom's 8 design principles. If a future democracy-tech book does
// (e.g., a numbered list of democratic primitives in a specific chapter),
// add a targeted extraction here similar to the Ostrom case in
// extract-data.commons.ts.

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('FATAL: ANTHROPIC_API_KEY not set. Add it to .env or export it.');
    process.exit(1);
  }
  console.log(`Source: ${SOURCE}`);
  console.log(`Cache:  ${CACHE_DIR} (delete to force re-extraction)`);

  const source = readFileSync(SOURCE, 'utf-8');
  const chunks = chapterChunks(source);
  console.log(`Chunked source into ${chunks.length} chapters`);

  mkdirSync(DATA_DIR, { recursive: true });
  mkdirSync(CACHE_DIR, { recursive: true });

  const t0 = Date.now();

  const allCatalogs: Catalog[] = ['cases', 'failure_modes', 'governance_forms', 'policy_strategies', 'glossary', 'quotes'];
  const results: Record<Catalog, any[]> = {} as any;

  for (const cat of allCatalogs) {
    results[cat] = await extractCatalog(config, cat, chunks);
    if (DEDUP_CATALOGS.has(cat)) {
      results[cat] = await dedupCatalog(config, cat, results[cat]);
    }
  }

  for (const cat of allCatalogs) {
    const filePath = join(DATA_DIR, `${cat}.ts`);
    writeFileSync(filePath, FILE_HEADERS[cat] + JSON.stringify(results[cat], null, 2) + ';\n');
    console.log(`Wrote ${filePath} (${results[cat].length} entries)`);
  }

  const indexContent = `export { CASES } from './cases.js';
export { FAILURE_MODES } from './failure_modes.js';
export { GOVERNANCE_FORMS } from './governance_forms.js';
export { POLICY_STRATEGIES } from './policy_strategies.js';
export { GLOSSARY } from './glossary.js';
export { QUOTES } from './quotes.js';
`;
  writeFileSync(join(DATA_DIR, 'index.ts'), indexContent);
  console.log(`Wrote ${join(DATA_DIR, 'index.ts')}`);

  const dt = ((Date.now() - t0) / 1000).toFixed(1);
  console.log(`\nDone in ${dt}s`);
}

main().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
