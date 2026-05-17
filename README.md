# Plurality — MCP Server

An MCP server embedding *Plurality: The Future of Collaborative Technology and Democracy* by E. Glen Weyl, Audrey Tang & ⿻ Community (2024, CC0).

> Built for: civic technologists, digital-democracy builders, governance designers, deliberation facilitators, DAO designers, civic-tech researchers, and public-interest technology funders. Use it inside Claude Desktop, Claude Code, or any MCP-compatible client to apply Plurality's framing to a real situation — diagnose monist or atomist failure modes, find precedent ⿻ cases (Taiwan civic-tech and global digital-democracy), surface ⿻ design moves, or reframe a "AI replaces democracy" / "markets solve everything" framing into ⿻.

The server is hosted publicly. No account, no API key, no install required — just point your Claude client at the URL.

---

## Quickstart — Claude Desktop

If you use the Claude Desktop app:

**1. Open your Claude Desktop config file.**

| Your OS | File location |
|---|---|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json` |

If the file doesn't exist, create it.

**2. Add this entry.** If you already have other `mcpServers`, add `"plurality"` alongside them; otherwise paste the whole block:

```json
{
  "mcpServers": {
    "plurality": {
      "url": "https://plurality-mcp-production.up.railway.app/mcp",
      "transport": "http"
    }
  }
}
```

**3. Quit and restart Claude Desktop.** (Fully quit — closing the window doesn't reload MCP servers.)

**4. Verify it's connected.** Open a new conversation and type:

> What MCP tools do you have available?

Claude should mention 13 tools whose names start with `start_analysis`, `diagnose_monist_atomist`, `find_failure_mode`, `find_quote`, etc. If not, the config file probably has a syntax error or the wrong path — see [troubleshooting](#troubleshooting) below.

## Quickstart — Claude Code

Run this once from your terminal:

```bash
claude mcp add --transport http -s user plurality https://plurality-mcp-production.up.railway.app/mcp
```

Then restart your Claude Code session and check `claude mcp list` — you should see `plurality ... ✓ Connected`. The 13 tools become available with names like `mcp__plurality__start_analysis`.

---

## What's in the catalog

Plurality's central distinction — *⿻ vs. monist (centralizing technocracy) vs. atomist (libertarian-market-only)* — shapes the data:

- **Cases** — civic-tech and digital-democracy examples the book documents (vTaiwan, Polis, JOIN platform, g0v, Moedict, Decidim, Wikipedia, Wikidata, Gitcoin Quadratic Funding, Estonia e-government, Iceland's 2010 crowdsourced constitution, etc.). Each entry names its **community** (who participates), the **governance forms** it uses, and 2–5 concrete **⿻ features**.
- **Failure modes** — counter-⿻ patterns (monist technocracy, atomist libertarianism, Big-Tech engagement-maximization, authoritarian digital governance, surveillance capitalism, captured-DAO plutocracy, etc.) plus specific historical instances the book documents. Each entry has a `kind` discriminator (`pattern` or `instance`) and cross-references to the ⿻ primitives that counter it.
- **Governance forms** — ⿻ primitives with diagnostic questions: quadratic voting, quadratic funding, plural voting, conviction voting, augmented deliberation, polis-style clustering, post-symbolic communication, immersive shared reality, partial common ownership, depreciating licenses, data unions / data coalitions, intersectional social identity, prediction markets, federated subsidiarity, etc. Each lists which failure modes it counters and which cases exemplify it.
- **Policy strategies** — scaled moves that embed ⿻ at the policy/regulatory level: digital-ministry mandates, public-interest media funding, antitrust as ⿻, public-option platforms, plurality-pluralism education, data-union legal frameworks, public AI compute, etc.
- **Glossary** — the book's vocabulary (⿻, plurality publics, augmented deliberation, post-symbolic communication, intersectional social identity, Yushan view, lost dao, monist, atomist, g0v, etc.).
- **Quotes** — verbatim passages indexed by theme, with full attribution to Weyl, Tang & ⿻ Community built into every response. The book is CC0 so no license restriction applies, but attribution is included as a scholarly norm.

---

## What you can ask it to do

You don't call the tools directly. You talk to Claude in plain English, and Claude decides which tools to use. Two common starting points:

### Diagnosing monist or atomist drift

You're trying to write up, advocate against, or just *understand* a situation where a system is collapsing into a single optimization target (monist) or atomizing into pure-market individualism (atomist). The MCP helps Claude walk Plurality's diagnostic ladder with you.

> **You:** I keep hearing AI-policy proposals that frame deliberative democracy as obsolete — "let an aligned AI optimize policy directly, voting is too slow." How should I think about this through the Plurality frame?
>
> **Claude:** [calls `start_analysis(situation: "diagnose_monist_atomist")`] Plurality names four diagnostic angles: does the proposal collapse social diversity into a single optimization target (monist) or atomize into isolated individuals? Whose intersectional identities or social ties does it erase? What's the ⿻ alternative?
>
> [calls `diagnose_monist_atomist(description: "...")`] Classification: *monist_technocratic*. Plurality (Ch. 1–3) names "AI replaces democracy" as the canonical monist failure mode — collapse of plural publics into one optimization target. The book is explicit (Ch. 5-4 "Augmented Deliberation"): the ⿻ answer is AI that *augments* deliberation, not replaces it.
>
> [calls `apply_plurality_reframe(monist_or_atomist_framing: "AI can replace deliberation")`] Reframe: Plurality (Ch. 5-4) treats AI as a tool *in service of* plural publics — Polis-style clustering surfaces cross-group consensus and divisive statements without flattening them. The model amplifies deliberation rather than substituting for it...

### Designing a ⿻ system

You're building or stewarding a digital-democracy / civic-tech / governance system — a deliberation platform, a public-interest data union, a federated network, a DAO — and want to align it with ⿻ principles.

> **You:** I'm building a civic deliberation platform for a city budget — maybe 5000 residents participating. Want to design it on ⿻ principles, not just "lol let everyone vote on everything." Where do I start?
>
> **Claude:** [calls `start_analysis(situation: "design_plural_system")`] Plurality's frame: a ⿻ system layers identity (rights OS), association (plurality publics), augmented deliberation, plural voting, social markets, and federation. Let me walk you through each layer.
>
> [calls `find_precedent_case(domain: "public_infrastructure", what_governed: "deliberation and resource allocation")`] Three precedent cases worth studying: vTaiwan (Polis-based cross-faction consensus surfacing), Decidim Barcelona (participatory budgeting with deliberation), and Iceland's 2010 crowdsourced constitution.
>
> [calls `assess_plural_design`] Let me walk you through the six layers with diagnostic questions: intersectional identity, plurality publics, augmented deliberation, plural voting, social markets, federation...
>
> [calls `suggest_governance_forms(domain: "public_infrastructure")`] Primitives that fit: polis-clustering for deliberation, quadratic voting for intensity-aware budget allocation, quadratic funding for matching grants to community projects, sortition juries for contested decisions, federated subsidiarity for ward/neighborhood scope.

### Other things to try

- "Reframe 'crypto governance can replace democracy' in ⿻ terms" — pulls in the atomist reframe move
- "What does Plurality mean by 'intersectional social identity'?" — uses the glossary
- "Find me a passage on the Yushan view" — surfaces verbatim quotes with citations
- "Is this DAO actually plural, or just atomism with token-voting?" — surfaces failure-mode signals
- "What policy moves would scale digital-democracy across cities?" — surfaces policy strategies
- "Walk me through vTaiwan as a case study" — pulls the case + grounding quotes

---

## Troubleshooting

**Claude doesn't list any Plurality tools after restart.**
Most often a JSON typo or wrong file path. On macOS: `cat ~/Library/Application\ Support/Claude/claude_desktop_config.json` should print your config — if not, the file is in the wrong place or has malformed JSON. Run the file's contents through a JSON validator (paste into https://jsonlint.com).

**Claude Code says "Connection failed".**
Confirm the URL works directly: `curl https://plurality-mcp-production.up.railway.app/health` should return `{"status":"ok",...}`. If yes, the server is up — check `claude mcp list` to see what scope and URL Claude Code recorded.

**Tools work but responses feel generic.**
The MCP scaffolds Plurality's framing; the depth comes from how specifically you describe your situation. Vague prompts get vague tool calls. Lead with the concrete case ("the Polis tool in vTaiwan", "our city budget deliberation platform") and let Claude route from there.

---

## All 13 tools (for reference)

You don't usually call these directly — Claude picks them based on your prompt — but here's the surface:

- **Routing:** `start_analysis`, `suggest_next_step`
- **Diagnostic:** `diagnose_monist_atomist`, `find_failure_mode`, `find_precedent_case`, `list_policy_strategies`
- **Design:** `assess_plural_design`, `find_similar_case`, `suggest_governance_forms`
- **Reference:** `apply_plurality_reframe`, `get_glossary_term`, `find_quote`, `search_book`

---

## Run it locally (advanced)

If you'd rather host the MCP yourself (offline, custom catalog, learning, contributing):

```bash
git clone https://github.com/zhiganov/plurality-mcp.git
cd plurality-mcp
npm install
npm run build
```

Then add it to Claude Code as a local stdio server. The path you need is the absolute path to `dist/index.js` — run `pwd` inside the cloned directory and append `/dist/index.js`:

```bash
claude mcp add-json plurality '{"command":"node","args":["<absolute-path>/dist/index.js"],"type":"stdio"}' -s local
```

(For Claude Desktop, the equivalent JSON in your config file uses `"command"` and `"args"` instead of `"url"`.)

---

## License

Dual-licensed.

- **Source code:** MIT.
- **Embedded book content** (catalogs, quotes, glossary): CC0 1.0 Universal. Plurality is dedicated to the public domain by its authors — no attribution is legally required, though this MCP includes attribution as a scholarly norm. See [LICENSE](LICENSE).

Source book: [plurality.net](https://www.plurality.net) — free, open source: [pluralitybook/plurality on GitHub](https://github.com/pluralitybook/plurality).

## Development

Source: TypeScript ESM, `@modelcontextprotocol/sdk`, `zod`. Stack documented in [CLAUDE.md](CLAUDE.md).

Catalogs are extracted from the source markdown via `npm run extract` (requires `ANTHROPIC_API_KEY` in `.env`). The extraction pipeline uses `claude-sonnet-4-6` with structured tool-use, prompt caching, and a post-extraction semantic dedup pass — see `scripts/extract-core.ts` and `scripts/extract-data.democracy-tech.ts` (templates from the book-power umbrella, private).

The source markdown at `books/plurality.md` is the upstream from [pluralitybook/plurality](https://github.com/pluralitybook/plurality) concatenated. CC0 allows it to be vendored here without restriction, but it stays gitignored locally to keep the repo lean; re-fetch by cloning the upstream and concatenating.

## Related

Sibling MCPs under the book-power umbrella (umbrella repo private):

- [governable-spaces-mcp](https://github.com/zhiganov/governable-spaces-mcp) — Schneider's *Governable Spaces* framing (shipped, public, CC BY-NC-SA)
- [think-like-a-commoner-mcp](https://github.com/zhiganov/think-like-a-commoner-mcp) — Bollier's commons framing (shipped, public, CC BY-NC-SA)
- jtbd-knowledge-mcp — JTBD framing combining Moesta + Kalbach (shipped, private — copyrighted source)
- facilitating-deliberation-mcp — MosaicLab's facilitator reference (shipped, private — copyrighted source)
