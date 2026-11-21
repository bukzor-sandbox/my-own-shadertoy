---
managed-by: Skill(llm-subtask)
status: open
blocked-by:
  - 2026-11-21-001-sweep-references.md
required-reading:
  - CLAUDE.md
  - ../../../docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.jsonschema.yaml
  - ../../../docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.md
  - ../../../docs/dev/claims.kb/design.kb/requirements.kb/first-instances-are-bukzors.md
  - ../../../docs/dev/claims.kb/design.kb/requirements.kb/recall-from-memory.md
  - ../../../docs/dev/claims.kb/technical-policy.kb/learning-notes.md
  - ../../../docs/dev/claims.kb/technical-policy.kb/ask-before-editing-kept.md
  - ../../../docs/dev/claims.kb/technical-policy.md
  - ../../must-read.kb/
  - ../../todo.md
  - 2026-11-21-000-collection-and-schema.md (its Final report, for 0.1's first
    uses)
  - ~/.claude/must-read.kb/before/writing-agent-facing-instruction.md
  - Skill(llm-claims-kb)
  - Skill(llm-must-read-kb)
---

# First uses carry evidence, not attribution; recall names its artifact

**Parent:** <https:../2026-11-21-000-promote-milestone-ladder.md> (wave 3)

## Problem Statement

bukzor ruled, in session 6307adfb:

- `first-uses[].by` goes. It has one allowed value: `FIRST_INSTANCE` requires
  bukzor's typing and `CLAUDE_RELUCTANT` has Claude decline to type a first use,
  so `by: claude` could only record a violation. Being listed means bukzor
  confirmed it at landing; a violation is not recorded but routed to
  `when/claude-wrote-more-in-a-kept-group-than-asked.md` (evidence for
  `ASK_BEFORE_EDITING_KEPT`) and fixed.
- Each first use gains `evidence:`, a list of `path:funcname` strings naming
  where the use lives (`packages/gpu/device/src/index.ts:init`): stable across
  edits, greppable.
- `LEARNING_NOTES` is rewritten in place, not superseded, and renamed:
  `UNDERSTANDING_HAS_A_HOME`, `understanding-has-a-home.md`. bukzor's words,
  quote them sensatim: 'How about a suggestion that each recall "should" have
  some corresponding code or doc in version control, some durable artifact
  representing the understanding.' and, of "An item with none to name is the
  occasion to write one": "I like this bit." State in present tense that there
  is no separate notes collection (the artifact is wherever the understanding
  fits); no history of `docs/webgpu.kb/`.
- Recall stays in `.claude/todo.md` (bukzor's ruling 83f86b54 stands). Each
  recall item names its artifact as text.

Changes:

- Schema: `first-uses` items are `{use, evidence}`, both required, `by` removed;
  descriptions say what listing means.
- Roll-up `milestone-ladder.md`: its first-uses rule stops saying "who typed
  it".
- `FIRST_INSTANCE`: the check becomes bukzor's confirmation at landing of the
  listed first uses, with violations routed as above. Drop the `jq` `by` check.
  Keep the trailer sentence and the existing quote.
- `after/a-milestone-lands.md`: list first uses, each with `evidence:`, and ask
  bukzor to confirm the list. Drop the `md-frontmatter-set` mention: an agent
  adding a few entries edits the file directly.
- `UNDERSTANDING_HAS_A_HOME`: as above; `force: should`; `why:` names `RECALL`.
- Delete `before/working-on-a-webgpu-concept.md` and
  `when/bukzor-works-out-how-a-webgpu-concept-fits.md`. Move the rule's occasion
  into `before/ending-a-session.md`'s recall bullet: each new recall item names
  its artifact, and one with none is the occasion to write it.
- `.claude/todo.md`: drop the recall item's "Offered: ... `docs/webgpu.kb/`"
  text; recalls 1-3 each name `packages/gpu/device/src/index.ts:init` as
  evidence. Recall 4 gets no pointer: naming its artifact would hint at the
  answer, and none exists yet. Do not change any recall question's wording. The
  0.1 item becomes "confirm 0.1's first uses" (same pointer to unit 000's list).
- Write 0.1's `first-uses:` from unit 000's list, each with `evidence:` you
  verify in the code, and leave it **staged, uncommitted**: bukzor confirms it.
  Commit everything else.

**Scope (only these files):** the schema, roll-up, and
`milestone-ladder.kb/00.1-adapter-and-device.md` (staged only);
`docs/dev/claims.kb/design.kb/requirements.kb/first-instances-are-bukzors.md`;
`docs/dev/claims.kb/technical-policy.kb/learning-notes.md` (renamed);
`.claude/must-read.kb/after/a-milestone-lands.md`,
`.claude/must-read.kb/before/ending-a-session.md`, and the two deleted entries;
`.claude/todo.md`; this handoff file. Not `error-handling.md`: bukzor has it
open.

## Steps

## Decisions

## Open Questions

## Final report
