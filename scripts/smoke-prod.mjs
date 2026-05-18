// Smoke-test all 13 plurality-mcp tools against the production HTTP endpoint.
// Reports pass/fail + a one-line excerpt per tool. No deps beyond Node 18+ fetch.
//
// Usage: node scripts/smoke-prod.mjs
//        URL=http://localhost:3000/mcp node scripts/smoke-prod.mjs    # for local dev
//
// MCP streamable HTTP: returns Server-Sent Events ("data: {...}" lines).
// The session ID is in the mcp-session-id response header after initialize;
// pass it back on subsequent requests. notifications/initialized comes second
// per the MCP protocol.

const URL = process.env.URL || 'https://plurality-mcp-production.up.railway.app/mcp';
let sessionId = null;

async function rpc(method, params, id = null) {
  const body = { jsonrpc: '2.0', method, ...(id != null ? { id } : {}), ...(params ? { params } : {}) };
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/event-stream',
  };
  if (sessionId) headers['mcp-session-id'] = sessionId;
  const res = await fetch(URL, { method: 'POST', headers, body: JSON.stringify(body) });
  if (!sessionId) {
    const sid = res.headers.get('mcp-session-id');
    if (sid) sessionId = sid;
  }
  const text = await res.text();
  const dataLines = text.split('\n').filter(l => l.startsWith('data: ')).map(l => l.slice(6));
  if (dataLines.length === 0) return { raw: text };
  return JSON.parse(dataLines[0]);
}

async function callTool(name, args) {
  const result = await rpc('tools/call', { name, arguments: args }, Math.floor(Math.random() * 1e9));
  if (result.error) return { ok: false, error: result.error };
  const content = result.result?.content?.[0]?.text ?? '';
  return { ok: true, text: content, len: content.length };
}

function excerpt(t) {
  if (!t) return '(empty)';
  return t.replace(/\s+/g, ' ').slice(0, 140) + (t.length > 140 ? '...' : '');
}

async function main() {
  console.log(`URL: ${URL}`);
  console.log('--- initialize ---');
  const init = await rpc('initialize', {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'smoke-prod', version: '1.0' },
  }, 1);
  console.log('  protocolVersion:', init.result?.protocolVersion);
  console.log('  serverInfo:', JSON.stringify(init.result?.serverInfo));
  console.log('  session:', sessionId);

  await rpc('notifications/initialized', null);

  console.log('--- tools/list ---');
  const list = await rpc('tools/list', null, 2);
  const tools = list.result?.tools ?? [];
  console.log(`  ${tools.length} tools: ${tools.map(t => t.name).join(', ')}`);

  const cases = [
    ['start_analysis', { situation: 'diagnose_monist_atomist' }],
    ['suggest_next_step', { context_summary: 'An AI-policy proposal claims deliberation is too slow and an aligned AI should optimize policy directly.', tools_used_so_far: [] }],
    ['diagnose_monist_atomist', { description: 'A proposal that an aligned AI should replace city-council deliberation and optimize budget allocation directly, with no role for citizen input.' }],
    ['find_failure_mode', { domain: 'public_infrastructure', signs: ['engagement maximization', 'algorithmic curation', 'platform power'] }],
    ['find_precedent_case', { domain: 'state', what_governed: 'deliberation and policy', scale: 'national' }],
    ['list_policy_strategies', { domain: 'state' }],
    ['assess_plural_design', { space_description: 'A city budget deliberation platform with 5000 residents.' }],
    ['find_similar_case', { domain: 'public_infrastructure', what_governed: 'participatory budgeting' }],
    ['suggest_governance_forms', { domain: 'public_infrastructure', max_results: 3 }],
    ['apply_plurality_reframe', { monist_or_atomist_framing: 'Free markets and crypto governance will solve coordination — we do not need slow deliberation.' }],
    ['get_glossary_term', { term: '⿻' }],
    ['find_quote', { theme: 'plurality', max_results: 2 }],
    ['search_book', { query: 'vTaiwan', max_results: 3 }],
  ];

  console.log('--- tool calls ---');
  let pass = 0, fail = 0;
  for (const [name, args] of cases) {
    const r = await callTool(name, args);
    if (r.ok && r.len > 50) {
      pass++;
      console.log(`  ✓ ${name.padEnd(28)} ${r.len}b  ${excerpt(r.text)}`);
    } else if (r.ok) {
      fail++;
      console.log(`  ⚠ ${name.padEnd(28)} ${r.len}b (short response)  ${excerpt(r.text)}`);
    } else {
      fail++;
      console.log(`  ✗ ${name.padEnd(28)} ERROR: ${JSON.stringify(r.error).slice(0, 200)}`);
    }
  }
  console.log(`\n${pass}/${cases.length} tools returned substantive responses; ${fail} flagged.`);
  process.exit(fail > 0 ? 1 : 0);
}

main().catch(e => { console.error('FATAL:', e); process.exit(1); });
