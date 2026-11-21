---
managed-by: Skill(llm-subtask)
status: done
required-reading:
  - CLAUDE.md
  - ../../../docs/dev/claims.kb/design.md
  - ../../../docs/dev/claims.kb/design.kb/CLAUDE.md
  - ../../../docs/dev/claims.kb/design.kb/deliverables.md
  - ../../../docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.md
  - ../../../docs/dev/claims.kb/jsonschema/claim.jsonschema.yaml
  - ../../../docs/dev/claims.kb/design.kb/requirements.kb/first-instances-are-bukzors.md
  - Skill(llm-kb), then its references/creating-a-new-kb.md,
    references/schema-reuse.md, references/schema-design.md,
    references/frontmatter-outside-a-collection.md
  - Skill(llm-claims-kb)
  - Skill(llm-design-kb)
---

# `milestone-ladder.kb/`: one claim per milestone, with `first-uses:`

**Parent:** <https:../2026-11-21-000-promote-milestone-ladder.md> (wave 1)

## Problem Statement

Promote the ladder's 14 list lines into `milestone-ladder.kb/`, one claim file
per milestone, plus `milestone-ladder.jsonschema.yaml` beside the directory.
`milestone-ladder.md` stays the ladder's defining claim and becomes the roll-up:
it keeps the ladder's rules (order, splitting into `N.M` in place, how "next" is
found, the declined bind-group-layout refactor) and stops enumerating. Unit 001
then retargets every reader of the ladder to what you produce, so the schema and
roll-up are the interface: make the field, the landed rule, and the file naming
legible there.

Decided already:

- Landed means the milestone's claim has no `todo: true`; it replaces the
  "Landed." marker. 0.0 and 0.1 are landed; the rest carry `todo: true`.
- `first-uses:` lists the milestone's first uses in the codebase of a WebGPU API
  or WGSL feature, each `{use, by}`; `by` is `bukzor` or `claude`, both keys
  required. It serves `FIRST_INSTANCE`. A milestone with nothing recorded omits
  the field.
- The schema extends the local claim schema's `#base`
  (`../../jsonschema/claim.jsonschema.yaml#base`), adds `first-uses`, and closes
  with `unevaluatedProperties: false`. It also governs the roll-up (llm-kb's
  roll-up reach), so the roll-up must still validate.
- Files are ordered by name, zero-padded so they sort (`00.1-...`, `07-...`);
  you choose the slugs, named for what the milestone builds.
- Each milestone keeps its line's content: what lands, then the packages it
  introduces. Don't add design the line didn't have.
- 0.1 gets no `first-uses:` (attribution is bukzor's). Instead derive 0.1's
  first uses from the code it landed (`apps/bukzor-shadertoy/src/`,
  `packages/gpu/device/src/`) and list them in your Final report, for bukzor to
  attribute.
- Record bukzor's ruling in the roll-up as a sensatim quote:
  `> [!@bukzor] 6307adfb` / `> promotion, imo`.

Settle and report: labels for milestone claims (the claim schema's label pattern
applies; `MILESTONE_0_1` is one candidate); whether each milestone's `why:`
names the roll-up; whether `milestone-ladder.kb/` needs a `CLAUDE.md` (only if
it would say something the roll-up and `design.kb/CLAUDE.md` don't).

**Scope (only these files):**
`docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.md`,
`docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.jsonschema.yaml`
(new), `docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.kb/`
(new), and this handoff file.

## Steps

- [x] Write `milestone-ladder.jsonschema.yaml`
- [x] Write the 14 milestone claims in `milestone-ladder.kb/`
- [x] Rewrite `milestone-ladder.md` as the roll-up
- [x] Derive 0.1's first uses from its code
- [x] Validate, format, `lib/ci/check`, commit

## Decisions

- Labels are `MILESTONE_N` / `MILESTONE_N_M`. The number is the milestone's
  stable handle: splits insert `N.M` without renumbering, and the trigger bank
  already cites milestones by number (`starting-milestone-1.2.md`).
- Each milestone's `why:` names the roll-up. Without it the 14 claims are 14
  disconnected graph components; with it the ledger stays at 2, as before.
- No `milestone-ladder.kb/CLAUDE.md`: the roll-up states naming and landing, and
  `design.kb/CLAUDE.md` already says where a claim goes.
- The roll-up drops `todo: true`. Its rules are in force now, and the unbuilt
  tense moved to the members; keeping it would list the ladder in the
  `todo: true` scan until milestone 7.
- The roll-up stipulates no `ontology:`. "Landed" is the only candidate, and a
  sibling (`tutorial-reading.md`) says "lands", so owning it would make that
  sibling trespass.
- Each milestone got a declarative `#` title; the body is its line, then
  `Packages:`. `standing: user`, `author: agent` carried over from the ladder.

## Open Questions

- The roll-up is validated against `deliverables.jsonschema.yaml`, its parent
  collection's schema, not `milestone-ladder.jsonschema.yaml` as the brief
  assumed: a `first-uses:` injected into the roll-up was rejected as an
  unevaluated property. Harmless today (the roll-up carries no `first-uses:`);
  whether the validator should prefer the beside-schema is llm-kb's question.
- Splitting an integer milestone (3 into 3.1, 3.2) retires `MILESTONE_3`.

## Final report

Checks: `llm.kb-validate docs/dev/claims.kb` (53 files, 0 errors),
`llm.kb-validate-links` (0 broken), `llm-claims-kb-mentions` (0 unresolved),
`llm-claims-kb-graph` (2 components, acyclic), `lib/ci/check` (green). The
next-milestone `grep` in the roll-up prints `00.2-canvas-surface.md`.

Results live in the schema, the roll-up, and `milestone-ladder.kb/`. Deviation:
the schema's description no longer claims to govern the roll-up (see Open
Questions).

0.1's first uses, derived from `packages/gpu/device/src/index.ts` and
`apps/bukzor-shadertoy/src/pages/gpu-info/main.ts`, for bukzor to attribute (no
WGSL yet):

- `navigator.gpu`, `gpu.requestAdapter()`, `adapter.requestDevice()`
- `adapter.info`, `adapter.features`, `adapter.limits`
- `device.features`, `device.limits`
- `device.addEventListener("uncapturederror", ...)`, `GPUError`
- `device.lost`, `GPUDeviceLostInfo` (`reason`, `message`)
- `device.createBuffer()`, `GPUBufferUsage`
- `device.queue.submit()`
- `device.destroy()`
- Borderline, not WebGPU itself: `window.isSecureContext`
