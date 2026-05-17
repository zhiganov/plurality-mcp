# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**plurality-mcp** — Public MCP server embedding E. Glen Weyl, Audrey Tang & ⿻ Community's *Plurality: The Future of Collaborative Technology and Democracy* (2024, CC0). 13 tools across 4 groups (routing, diagnostic, design, reference). Dual-licensed: MIT code + CC0 embedded content.

## Commands

```bash
npm run build          # Compile TypeScript (tsc)
npm run dev            # Run directly with tsx (no build step)
npm start              # Run compiled server (dist/index.js)
npm run extract        # Re-run Sonnet extraction over books/plurality.md (requires ANTHROPIC_API_KEY)
npm run typecheck      # tsc --noEmit

# Not in package.json scripts (run directly):
npx tsx scripts/dry-run.ts   # Sanity-check chapter chunking from books/plurality.md. No API calls; no key needed.
```

## Architecture

```
src/
├── index.ts                 # MCP server — 13 tool registrations + handlers + dual transport
├── search.ts                # Substring search across all 6 catalogs
├── types.ts                 # Case, FailureMode, GovernanceForm, PolicyStrategy, GlossaryTerm, Quote
└── data/
    ├── index.ts             # Re-exports
    ├── cases.ts             # Civic-tech / digital-democracy examples (Taiwan + global)
    ├── failure_modes.ts     # Counter-⿻ patterns + named instances (kind discriminator)
    ├── governance_forms.ts  # ⿻ primitives (quadratic voting, augmented deliberation, polis-clustering, etc.)
    ├── policy_strategies.ts # Scaled policy moves (digital ministries, public-interest media funding, data unions, etc.)
    ├── glossary.ts          # ⿻, augmented deliberation, lost dao, Yushan view, monist, atomist, etc.
    └── quotes.ts            # Themed grounding passages with attribution

scripts/
├── extract-core.ts              # Book-agnostic extraction infra (chapter chunking, ids_so_far, dedup pass, cache). Synced from book-power templates.
├── extract-data.democracy-tech.ts  # Domain config (catalog set, schemas, system prompt). Reusable across democracy-tech books.
└── dry-run.ts                   # Sanity check: confirms chapterChunks splits the source as expected (no API calls)

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
- **Re-extract from a revised source** — `npm run extract`. Requires `ANTHROPIC_API_KEY` in `.env` and `books/plurality.md` present. Cached per-chapter in `.extraction-cache/` so partial re-runs are cheap.

## Testing

No test suite. Validate changes via:

- `npm run typecheck` — type-safety + Zod-schema sanity (catches most data-shape regressions).
- `npm run dev` then connect with [MCP Inspector](https://github.com/modelcontextprotocol/inspector) or a real Claude client to call the changed tool.
- For catalog-only edits, typecheck plus one targeted tool call is usually sufficient.

## Stack

TypeScript strict ESM, `@modelcontextprotocol/sdk` v1.27+, `zod` v4, `express`. Extraction script uses `@anthropic-ai/sdk` with `claude-sonnet-4-6` and prompt caching.

## Deployment

Railway (public, no auth), service `plurality-mcp` under the **Book Power** Railway project. GitHub auto-deploy from `main` is wired via Railway's GitHub app on `zhiganov/plurality-mcp`.

## Source

E. Glen Weyl, Audrey Tang & ⿻ Community, *Plurality: The Future of Collaborative Technology and Democracy* (2024). CC0 1.0 Universal — public domain. https://www.plurality.net — GitHub source: https://github.com/pluralitybook/plurality.

## Related

Sibling MCPs from the same book-power umbrella (private): governable-spaces (Schneider, public), think-like-a-commoner (Bollier, public), jtbd-knowledge (Moesta + Kalbach, private), facilitating-deliberation (White, Hunter, Greaves, private).
