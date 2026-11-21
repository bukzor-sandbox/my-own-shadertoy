---
managed-by: Skill(llm-subtask)
status: done
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

- [x] `FIRST_INSTANCE`: write the check, run it
- [x] `after/a-milestone-lands.md`: new occasion and act
- [x] Root `CLAUDE.md`: the roadmap sentence
- [x] Retarget the three `why:` entries
- [x] `git grep` for other readers

## Decisions

- `a-milestone-lands.md` keeps its filename: "a milestone lands" still names the
  occasion. Its first act is the `first-uses:` listing, the second the tutorial
  reading, each citing its ledger claim.
- `WEBGPU_INSPECTOR` now names milestone 1.1 (its tripwire is 1.1 starting);
  `DOM_BUILDING` names milestone 2.2 (its tripwire's one milestone).
  `HELPER_LIBRARIES` keeps the roll-up: it cites 2.1, 7, and "nothing else
  queued", so it depends on no one milestone.
- The check uses `.[\"first-uses\"][]?`, so milestones without the key print
  nothing. Run on the real collection: empty, exit 0 (no milestone records first
  uses yet). Run on a scratch file with a `claude` and a `bukzor` entry: prints
  only the `claude` one.

## Open Questions

- 0.1 is landed but its `first-uses:` is unrecorded (unit 000 listed candidates
  for bukzor to attribute), so the check is vacuously empty until bukzor gives
  each `by:`. I left the entry out per the attribution rule.
- Outside scope, not edited: `.claude/todo.md` line 15 ("Promote the milestone
  ladder so `FIRST_INSTANCE` has a check") is now done by units 000-001; lines
  17-18 and 19-20 refer to "the milestone ladder" and the roll-up path and stay
  valid. `docs/dev/claims.kb/design.kb/deliverables.md:18` and `design.md:49,53`
  say "the ladder" generically; still accurate. The parent plan's checklist is
  the coordinator's.

## Final report

Checks: `llm.kb-validate docs/dev/claims.kb`, `llm.kb-validate-links`, and
`lib/ci/check`: all green (53 files, 0 errors; 54 links, 0 broken).

Results live in: `CLAUDE.md` (roadmap sentence), `a-milestone-lands.md`,
`first-instances-are-bukzors.md` (the check), and the `why:` of
`webgpu-inspector.md` and `dom-building.md`; `helper-libraries.md` unchanged.
Deviation: none. Unattributed: all 0.1 first uses (see Open Questions).
