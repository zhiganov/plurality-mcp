import { chapterChunks } from './extract-core.js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const src = readFileSync(join(ROOT, 'books', 'plurality.md'), 'utf-8');
const chunks = chapterChunks(src);
console.log(`Chunks: ${chunks.length}`);
console.log('Front:');
for (const c of chunks.slice(0, 6)) {
  console.log(`  - ${c.chapterLabel.slice(0, 70)} (${c.text.length} chars)`);
}
console.log('Tail:');
for (const c of chunks.slice(-4)) {
  console.log(`  - ${c.chapterLabel.slice(0, 70)} (${c.text.length} chars)`);
}
const sizes = chunks.map(c => c.text.length);
console.log(`Total chars: ${sizes.reduce((a, b) => a + b, 0)}, avg per chunk: ${Math.round(sizes.reduce((a, b) => a + b, 0) / chunks.length)}`);
