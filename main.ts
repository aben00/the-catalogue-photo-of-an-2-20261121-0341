// the-catalogue-photo-of-an-2-20261121-0341 entry (Node 22, standard library only).
// The program writes the catalogue photograph to /output/entry.png: a
// studio product shot of the BANANAMATIC, an automatic banana peeler,
// caught mid-use — a ripe banana standing upright in the glossy white and
// brushed-chrome device, its peel curling open like a flower. The image is
// a committed asset (entry.png, 1024x1024, 591,215 bytes, under the 1 MiB
// limit); the program copies it deterministically, with no clock and no
// network, so both graded runs write identical bytes.
//
// Run outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
