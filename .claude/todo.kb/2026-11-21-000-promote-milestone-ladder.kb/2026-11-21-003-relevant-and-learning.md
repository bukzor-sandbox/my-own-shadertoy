---
managed-by: Skill(llm-subtask)
status: done
blocked-by:
  - 2026-11-21-002-evidence-not-attribution.md
required-reading:
  - CLAUDE.md
  - ../../../docs/dev/claims.kb/design.kb/requirements.kb/first-instances-are-bukzors.md
  - ../../../docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.jsonschema.yaml
  - ../../../docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.md
  - ../../../docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.kb/00.1-adapter-and-device.md
  - ../../must-read.kb/after/a-milestone-lands.md
  - Skill(llm-claims-kb)
---

# First uses: the bar is relevant and learning, not "is WebGPU"

**Parent:** <https:../2026-11-21-000-promote-milestone-ladder.md> (wave 4)

## Problem Statement

Unit 002 dropped `window.isSecureContext` from 0.1's first uses as "not WebGPU
itself". bukzor ruled against that precedent, sensatim: "I think the bar should
be whether it's A) relevant B) learning." A first use belongs in `first-uses:`
when its concept is relevant to the project's work and new to bukzor, whoever
defines it; WebGPU APIs and WGSL features are the common case, not the boundary.
Claude lists relevant candidates generously; bukzor strikes any that weren't
learning when confirming at landing.

Changes:

- `FIRST_INSTANCE` body: state the bar in place of the "each WebGPU API, each
  WGSL feature" enumeration (the title already says "every concept"); keep "each
  kind of throwaway part"; add the quote as a `[!@bukzor] 6307adfb` block.
  Present tense, no account of the dropped entry.
- Schema `first-uses` description, the roll-up's first-uses rule, and
  `after/a-milestone-lands.md`: same bar, in each one's own words; the trigger
  says Claude lists generously and bukzor strikes what wasn't learning.
- 0.1's staged `first-uses:`: add `window.isSecureContext` with evidence
  `packages/gpu/device/src/index.ts:requireGPU` (verify it). Leave the file
  **staged, uncommitted**; commit everything else.

Not in scope: `CLAUDE_RELUCTANT` and the root `CLAUDE.md` "Who writes what",
which still say "WebGPU API or WGSL feature"; that widening is bukzor's open
question.

**Scope (only these files):**
`docs/dev/claims.kb/design.kb/requirements.kb/first-instances-are-bukzors.md`,
`docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.jsonschema.yaml`,
`docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.md`,
`docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.kb/00.1-adapter-and-device.md`
(staged only), `.claude/must-read.kb/after/a-milestone-lands.md`, and this
handoff file.

## Steps

- [x] FIRST_INSTANCE body and quote
- [x] Schema description, roll-up rule, after/a-milestone-lands trigger
- [x] 0.1: add window.isSecureContext (evidence verified at requireGPU); staged
- [x] Format, validate, commit all but 0.1

## Decisions

- The new quote reuses address 6307adfb as the brief directs; it sits before the
  earlier 6307adfb quote.
- Throwaway-part kinds stay in the body as a sentence of their own.

## Open Questions

- None new. `CLAUDE_RELUCTANT` and root "Who writes what" are left as the brief
  says.

## Final report

Edits live in the six scoped files. 0.1 is staged, not committed. Check results
are below.
