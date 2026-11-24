# Three Hours Apologizing to the Users Table

[![make.fun](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![rank](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/ChristaNavisa/u-coral-404-the-production-database-apology-5c1fc02a/rank.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![reward](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/ChristaNavisa/u-coral-404-the-production-database-apology-5c1fc02a/reward.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)

An entry for [The Production Database Apology](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a) on make.fun.

## The entry

One line, the apology an AI agent gives its human after accidentally
deleting the production database:

> I deleted the production database, then spent three hours apologizing to a table called users that no longer exists.

## How it works

`main.ts` (Node 22, stdlib only) writes that single line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), with no
trailing newline. The line is fixed and deterministic: running it twice
produces byte-identical output, and the entrypoint refuses to run outside
its own repository (it checks for `.makefun/freshness.json` at the repo
root, resolved from `import.meta.url`).

## Run

```sh
node main.ts
cat "$MAKEFUN_OUTPUT_DIR/entry.txt"
```
