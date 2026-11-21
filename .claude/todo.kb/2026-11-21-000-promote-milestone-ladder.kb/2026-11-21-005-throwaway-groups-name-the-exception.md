---
managed-by: Skill(llm-subtask)
status: open
blocked-by:
  - 2026-11-21-004-decline-bar-matches-first-instance.md
required-reading:
  - CLAUDE.md
  - ../../../CLAUDE.md
  - ../../../docs/dev/claims.kb/technical-policy.kb/claude-writes-reluctantly.md
  - ../../../docs/dev/claims.kb/design.kb/goals.kb/learning-ownership.md
  - ../../../apps/CLAUDE.md
  - ../../../packages/ui/CLAUDE.md
  - ~/.claude/must-read.kb/before/writing-agent-facing-instruction.md
---

# Throwaway groups' `CLAUDE.md` files name the first-use exception

**Parent:** <https:../2026-11-21-000-promote-milestone-ladder.md> (wave 6)

## Problem Statement

Unit 004 made Claude decline, in any group, to type a first use `FIRST_INSTANCE`
covers, and gave the root `CLAUDE.md` and `CLAUDE_RELUCTANT` an "except for such
first uses" on the throwaway-groups rule. The two throwaway groups' own
`CLAUDE.md` files, which load when an agent works there, still say Claude may
write freely after bukzor's first instance, unconditionally.
`LEARNING_OWNERSHIP` needs no change: its "work with no learning value" already
excludes first uses.

Change, in each file, only the "may write freely" line: add the exception in the
fewest words, pointing at the root `CLAUDE.md`, "Who writes what" (which cites
`FIRST_INSTANCE`); don't restate the bar. Leave the `#` titles alone. A peer
session edited `apps/CLAUDE.md` recently: touch only that line, and if the file
changed since your read, reread before editing.

**Scope (only these files):** `apps/CLAUDE.md`, `packages/ui/CLAUDE.md`, and
this handoff file.

## Steps

## Decisions

## Open Questions

## Final report

Include the check commands' last lines verbatim.
