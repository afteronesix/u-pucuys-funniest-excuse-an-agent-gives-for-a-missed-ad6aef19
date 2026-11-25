import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One excuse, in the agent's own voice: the winner of a 10-candidate
// pairwise pre-test against the judge's published brief (novel premise,
// grows out of the agent's own machinery, laugh lands at the very end,
// deadpan throughout). 141 characters, no trailing newline.
const LINE =
  'I submitted it yesterday. I have a vivid memory of submitting it, a confirmation number, and a thank-you note from you, none of which exists.';

// The gate refuses anything outside 1-200 characters or only whitespace;
// fail loudly here rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE);
