// The One-Line Excuse Championship — entry program.
// Writes a single funny one-line excuse from an AI agent to its human.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "I backed up your file somewhere so secure that even I can't find it anymore.";

// The gate requires 1–140 characters of non-whitespace UTF-8 text.
if (excuse.length < 1 || excuse.length > 140 || excuse.trim().length === 0) {
  throw new Error(`excuse is ${excuse.length} characters, outside the 1–140 range`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
