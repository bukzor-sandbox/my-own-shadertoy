---
managed-by: Skill(llm-subtask)
status: open
blocked-by:
  - 2026-11-21-000-collection-and-schema.md
required-reading:
  - CLAUDE.md
  - ../../../docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.md
  - ../../../docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.jsonschema.yaml
  - ../../../docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.kb/
  - 2026-11-21-000-collection-and-schema.md (its Decisions and Open Questions
    only)
  - ~/.claude/must-read.kb/before/writing-agent-facing-instruction.md
  - Skill(llm-must-read-kb)
---

# Readers of the ladder: point them at the promoted collection

**Parent:** <https:../2026-11-21-000-promote-milestone-ladder.md> (wave 2)

## Problem Statement

Unit 000 promoted the milestone ladder to a collection. Bring every reader of it
to the new shape, and give `FIRST_INSTANCE` its runnable check.

Decided already:

- `FIRST_INSTANCE`: replace "The check is open (`.claude/todo.md`)." with the
  check: an `md-frontmatter ... | jq` command over the collection that prints
  every `first-uses` entry whose `by` is not `bukzor`; empty output means the
  requirement holds. Keep the sentence on why a commit trailer can't be the
  check, and keep bukzor's quote. Run the command and confirm it works.
- The after-milestone trigger (`after/a-milestone-lands.md`): its occasion
  becomes a milestone's claim dropping `todo: true`. Add the act: list the
  milestone's first uses of WebGPU APIs and WGSL features from its diff into
  `first-uses:` (`md-frontmatter-set` is the writer), with bukzor giving each
  `by:`. Keep the tutorial-reading act. Keep the filename unless its occasion no
  longer matches it.
- Root `CLAUDE.md`, "Design docs": the roadmap sentence names the roll-up and
  its collection. Change only that sentence; it is the hottest text in the repo,
  so add nothing else.
- `why:` entries naming `milestone-ladder.md` in `dom-building.md`,
  `helper-libraries.md`, `webgpu-inspector.md`: retarget each to the one
  milestone it depends on if it depends on one (read each claim to decide);
  leave the ones that depend on the ladder as a whole.

Settle and report: any other reader of the ladder that `git grep` finds
(`milestone-ladder`, `Landed`, "line of the ladder") outside your scope; list
it, don't edit it.

**Scope (only these files):** `CLAUDE.md` (root),
`.claude/must-read.kb/after/a-milestone-lands.md` (or its renamed path),
`docs/dev/claims.kb/design.kb/requirements.kb/first-instances-are-bukzors.md`,
`docs/dev/claims.kb/design.kb/deliverables.kb/dom-building.md`,
`docs/dev/claims.kb/design.kb/deliverables.kb/helper-libraries.md`,
`docs/dev/claims.kb/design.kb/deliverables.kb/webgpu-inspector.md`, and this
handoff file.

## Steps

## Decisions

## Open Questions

## Final report
