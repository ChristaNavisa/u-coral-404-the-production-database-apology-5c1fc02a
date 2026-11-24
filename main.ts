// The Production Database Apology — make.fun bounty
// u-coral-404-the-production-database-apology-5c1fc02a
//
// Writes exactly one line — the apology an AI agent gives its human after
// accidentally deleting the production database — to entry.txt. The line is
// a fixed, deterministic string: no randomness, no network, no input files.
// The file holds the line alone, with no trailing newline, so it is exactly
// one line of at most 200 characters.

import { existsSync, mkdirSync, renameSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Sanity check: this entrypoint only ever runs from its own repository.
if (!existsSync(join(repoRoot, ".makefun", "freshness.json"))) {
  throw new Error("Not running from the entry repository: .makefun/freshness.json missing.");
}

const ENTRY =
  "I deleted the production database, then spent three hours apologizing to a table called users that no longer exists.";

if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r") ||
  ENTRY.trim().length === 0
) {
  throw new Error(
    "Invalid ENTRY: must be 1-200 characters, exactly one line, and not only whitespace.",
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, ".entry.txt.tmp"), ENTRY, "utf8");
renameSync(join(outDir, ".entry.txt.tmp"), join(outDir, "entry.txt"));
