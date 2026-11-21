---
managed-by: Skill(llm-subtask)
status: open
---

# Promote the milestone ladder to one claim per milestone

**Context:** bukzor ruled "promotion, imo" (session 6307adfb, 2026-11-21).
`FIRST_INSTANCE`'s check was open once commit trailers were ruled out
(`docs/dev/claims.kb/design.kb/requirements.kb/first-instances-are-bukzors.md`).
The fix records per-concept attribution as data: each milestone's claim carries
a schema-checked `first-uses:` field, queried with `md-frontmatter | jq`.

## Problem Statement

`milestone-ladder.md` holds 14 parallel milestones as list lines, with status as
the prose marker "Landed.". It becomes the roll-up of `milestone-ladder.kb/`,
one claim per milestone, where landed means the claim has no `todo: true`, and a
landed milestone records its first uses of WebGPU APIs and WGSL features, and
who typed each.

## Implementation Steps

Handoffs: `2026-11-21-000-promote-milestone-ladder.kb/`.

- [x] Wave 1:
      [the collection and its schema](2026-11-21-000-promote-milestone-ladder.kb/2026-11-21-000-collection-and-schema.md)
- [x] Wave 2:
      [the references that read the ladder](2026-11-21-000-promote-milestone-ladder.kb/2026-11-21-001-sweep-references.md)
- [ ] Wave 3:
      [first uses carry evidence, not attribution; recall names its artifact](2026-11-21-000-promote-milestone-ladder.kb/2026-11-21-002-evidence-not-attribution.md)
- [ ] bukzor confirms 0.1's staged `first-uses:`

## Success Criteria

- [ ] `llm.kb-validate docs/dev/claims.kb` and `llm.kb-validate-links` are clean
- [ ] `lib/ci/check` is green
- [ ] No "Landed." status marker remains; the roll-up does not enumerate
- [ ] `FIRST_INSTANCE` names a runnable check, and it runs
- [ ] bukzor is satisfied on review; then close per Skill(subagent-handoffs)
