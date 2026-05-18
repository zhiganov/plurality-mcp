# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**plurality-mcp** — Public MCP server embedding E. Glen Weyl, Audrey Tang & ⿻ Community's *Plurality: The Future of Collaborative Technology and Democracy* (2024, CC0). 13 tools across 4 groups (routing, diagnostic, design, reference). Dual-licensed: MIT code + CC0 embedded content.

**Live:** https://plurality-mcp-production.up.railway.app/mcp (MCP streamable HTTP, no auth).

## Commands

```bash
npm run build          # Compile TypeScript (tsc)
npm run dev            # Run directly with tsx (no build step)
npm start              # Run compiled server (dist/index.js)
npm run extract        # Re-run Sonnet extraction over books/plurality.md (requires ANTHROPIC_API_KEY)
npm run typecheck      # tsc --noEmit

# Not in package.json scripts (run directly):
npx tsx scripts/dry-run.ts          # Sanity-check chapter chunking. No API calls; no key needed.
node scripts/smoke-prod.mjs         # Smoke-test all 13 tools against production. Exit 1 on any failure.
URL=http://localhost:3000/mcp node scripts/smoke-prod.mjs   # ... or against `npm run dev` (set PORT=3000 first).
```

## Architecture

```
src/
├── index.ts                 # MCP server — 13 tool registrations + handlers + dual transport
├── search.ts                # Substring search across all 6 catalogs
├── types.ts                 # Case, FailureMode, GovernanceForm, PolicyStrategy, GlossaryTerm, Quote
└── data/                       # Catalog sizes as of v0.1.1 (2026-05-17 re-extract)
    ├── index.ts                # Re-exports
    ├── cases.ts                # 246 civic-tech / digital-democracy examples (Taiwan + global)
    ├── failure_modes.ts        # 183 counter-⿻ patterns + named instances (kind discriminator)
    ├── governance_forms.ts     # 100 ⿻ primitives (quadratic voting, augmented deliberation, polis-clustering, etc.)
    ├── policy_strategies.ts    # 68 scaled policy moves (digital ministries, public-interest media funding, data unions, etc.)
    ├── glossary.ts             # 339 terms — ⿻, post-symbolic communication, intersectional social identity, lost dao, etc. (was 538 pre-cull, see "Known debt")
    └── quotes.ts               # 396 themed grounding passages with attribution

scripts/
├── extract-core.ts                 # Book-agnostic extraction infra (chapter chunking, ids_so_far, dedup pass, cache). Synced from book-power templates.
├── extract-data.democracy-tech.ts  # Domain config (catalog set, schemas, system prompt). Reusable across democracy-tech books.
├── dry-run.ts                      # Sanity check: confirms chapterChunks splits the source as expected (no API calls)
└── smoke-prod.mjs                  # End-to-end MCP smoke against production (or any URL via env)

books/
└── plurality.md             # Plurality source as flat markdown with # FILE: chapter markers (concatenated from https://github.com/pluralitybook/plurality). Gitignored.

.extraction-cache/           # Per-chapter result cache for restart-safe extraction. Gitignored.
```

## Tool groups (13 total)

**Routing (2):** `start_analysis`, `suggest_next_step`
**Diagnostic (4):** `diagnose_monist_atomist`, `find_failure_mode`, `find_precedent_case`, `list_policy_strategies`
**Design (3):** `assess_plural_design`, `find_similar_case`, `suggest_governance_forms`
**Reference (4):** `apply_plurality_reframe`, `get_glossary_term`, `find_quote`, `search_book`

## Key design decisions

- Hybrid: server provides framing scaffolding; Claude in conversation does analytical work (no LLM calls in server).
- All data embedded as TypeScript constants — no DB, no vector search.
- Substring search for cross-catalog discovery (`search_book`).
- Branching entry-point (`start_analysis`) routes to one of 4 workflows: diagnose_monist_atomist, design_plural_system, name_failure_mode, exploring.
- Dual transport: stdio (local dev) / StreamableHTTP (Railway). Mode is selected by `process.env.PORT` at runtime — set → HTTP listen on that port; unset → stdio. Railway sets `PORT` automatically. **No auth** — public, by design (book is CC0).
- `diagnose_monist_atomist` is intentionally heuristic and surfaces caveat: a ⿻ system recognizes partially-overlapping groups and intersectional identities — both monist (collapse to one) and atomist (atomize to isolated individuals) miss this. Negation handling is coarse — for nuanced cases the LLM consumer should override.
- `find_failure_mode` returns both pattern entries and instance entries (kind discriminator) so the agent can show "this is X pattern, exemplified by Y, Z, W historical instances."
- `find_quote` cap at 5 results × ~200 words each as a scholarly norm; each response includes attribution. CC0 imposes no license restriction.

## How to extend

- **New tool** — add a `server.registerTool(...)` block in `src/index.ts`. If the tool returns a new shape, add the interface to `src/types.ts` first; the data files import from there. Group with the matching tools-tools section header.
- **New catalog entry** — append to the relevant `src/data/<catalog>.ts` array. Each entry is typed against the corresponding interface in `src/types.ts`. Run `npm run typecheck` to surface shape errors.
- **Re-extract from a revised source (full)** — `npm run extract`. Requires `ANTHROPIC_API_KEY` in `.env` and `books/plurality.md` present. ~3h wall time, ~$8–12 on Sonnet (plurality.md is ~1MB).
- **Re-extract one catalog only** — delete `.extraction-cache/<catalog>/` entirely (chapter JSONs **and** the `_dedup.json` file). The other catalogs' caches are reused; only the targeted catalog hits the API. Recipe used during the 2026-05-17 glossary cull: `find .extraction-cache/glossary/ -type f -delete && rmdir .extraction-cache/glossary` then `npm run extract` — ~35 min, ~$1.

## Testing

No test suite. Validate changes via:

- `npm run typecheck` — type-safety + Zod-schema sanity (catches most data-shape regressions).
- `node scripts/smoke-prod.mjs` — end-to-end MCP handshake + all 13 tool calls against production (or any URL via `URL=...`). Exit code 1 on any failure. Use after a deploy or before promoting a release.
- `npm run dev` then connect with [MCP Inspector](https://github.com/modelcontextprotocol/inspector) or a real Claude client for interactive checks.
- For catalog-only edits, typecheck + one targeted smoke-prod run is usually sufficient.

## Stack

TypeScript strict ESM, `@modelcontextprotocol/sdk` v1.27+, `zod` v4, `express`. Extraction script uses `@anthropic-ai/sdk` with `claude-sonnet-4-6` and prompt caching.

## Deployment

Railway (public, no auth), service `plurality-mcp` under the **Book Power** Railway project. Live at https://plurality-mcp-production.up.railway.app/mcp (clean subdomain — no `-<random>` suffix workaround needed). GitHub auto-deploy from `main` is wired via Railway's GitHub app on `zhiganov/plurality-mcp`. **Never `railway up`** — push to GitHub for auto-deploy (hook-enforced).

## Known debt

- **Glossary still ~8x over its ~40-term target.** v0.1 shipped at 538 entries; v0.1.1 (current) cut it to 339 by tightening the SYSTEM_PROMPT against parenthetical-disambiguator decoration and adding cross-catalog routing rules. The remaining ~300 are mostly real terms the book defines but plurality's scope is genuinely sweeping. A manual cull pass against `src/data/glossary.ts` could land us closer to 80-120 — not blocking. Diagnosis + template fix: zhiganov/book-power#32.
- **Cross-catalog leakage from cases → governance_forms.** Surfaced during smoke testing: `sunflower-movement-reverse-mentorship` (a case) ranked top in `suggest_governance_forms`. Same family of failure as the glossary issue — the SYSTEM_PROMPT's cross-catalog routing rule is glossary-specific. Extend it to all catalogs in a future template iteration.

## Tracking issues

- [zhiganov/plurality-mcp#1](https://github.com/zhiganov/plurality-mcp/issues/1) — submit to awesome-mcp directories for discovery (modelcontextprotocol/servers, punkpeye/awesome-mcp-servers, mcpservers.org, etc.).
- [zhiganov/book-power#32](https://github.com/zhiganov/book-power/issues/32) — glossary over-extraction diagnosis + template fix (resolved-via-fix; carryover work is the manual cull and extending cross-catalog routing to other catalogs).

## Source

E. Glen Weyl, Audrey Tang & ⿻ Community, *Plurality: The Future of Collaborative Technology and Democracy* (2024). CC0 1.0 Universal — public domain. https://www.plurality.net — GitHub source: https://github.com/pluralitybook/plurality.

## Related

Sibling MCPs from the same book-power umbrella (private): governable-spaces (Schneider, public), think-like-a-commoner (Bollier, public), jtbd-knowledge (Moesta + Kalbach, private), facilitating-deliberation (White, Hunter, Greaves, private).
