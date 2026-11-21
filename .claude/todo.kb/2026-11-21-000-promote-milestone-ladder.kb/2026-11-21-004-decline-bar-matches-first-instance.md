---
managed-by: Skill(llm-subtask)
status: open
blocked-by:
  - 2026-11-21-003-relevant-and-learning.md
required-reading:
  - CLAUDE.md
  - ../../../CLAUDE.md
  - ../../../docs/dev/claims.kb/design.kb/requirements.kb/first-instances-are-bukzors.md
  - ../../../docs/dev/claims.kb/technical-policy.kb/claude-writes-reluctantly.md
  - ../../../packages/gpu/CLAUDE.md
  - ../../../packages/passes/CLAUDE.md
  - ~/.claude/must-read.kb/before/writing-agent-facing-instruction.md
  - Skill(llm-claims-kb)
---

# Claude's decline bar matches `FIRST_INSTANCE`'s

**Parent:** <https:../2026-11-21-000-promote-milestone-ladder.md> (wave 5)

## Problem Statement

`FIRST_INSTANCE` (bukzor accepted it, 6307adfb) now covers the first use in the
codebase of each concept relevant to the work and new to bukzor, whoever defines
it. Claude's decline rule still names only "a first use of a WebGPU API or WGSL
feature", and only for kept groups. bukzor ruled: "yes, CLAUDE.md (and
CLAUDE_RELUCTANT, perhaps) need updating".

Changes:

- Root `CLAUDE.md`, "Who writes what": Claude declines to type a first use that
  `FIRST_INSTANCE` covers, in any group, kept or throwaway (the requirement says
  "in the codebase"); cite `FIRST_INSTANCE` rather than restate its bar. The
  other bullets stay: kept groups still take only direct asks, and throwaway
  groups are free after bukzor's first instance of a kind of part, except for
  such first uses. This is the hottest text in the repo: keep the net change to
  a line or two.
- `CLAUDE_RELUCTANT`: the same, in the claim's own words. Its decline is
  currently framed for kept groups; it extends to first uses anywhere. Add
  bukzor's ruling above as a `[!@bukzor] 6307adfb` quote.
- `packages/gpu/CLAUDE.md`: "A first use of any WebGPU API is always bukzor's"
  points at `FIRST_INSTANCE` instead, or goes if the root rule covers it. Leave
  `packages/passes/CLAUDE.md`'s "WGSL is always bukzor's": it is stronger than
  first uses, not a restatement.

Settle and report: whether `goals.kb/learning-ownership.md`
(`LEARNING_OWNERSHIP`) contradicts the change; list it, don't edit it.

**Scope (only these files):** `CLAUDE.md` (root),
`docs/dev/claims.kb/technical-policy.kb/claude-writes-reluctantly.md`,
`packages/gpu/CLAUDE.md`, and this handoff file.

## Steps

## Decisions

## Open Questions

## Final report
