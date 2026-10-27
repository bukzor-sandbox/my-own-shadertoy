---
label: ASK_BEFORE_EDITING_KEPT
standing: open
why:
  - claude-writes-reluctantly.md
---

# Should Claude's edits to kept groups prompt for permission?

An `ask` rule in `.claude/settings.json` on Edit and Write under
`packages/program/`, `packages/gpu/`, and `packages/passes/` would make every
such edit a prompt bukzor sees. That is a speed bump, not a wall: it keeps
judgment in charge and costs one settings entry.

Settled by experience. Adopt if a session shows Claude writing more in a kept
group than was asked; decline if a few sessions pass and the instruction alone
holds.

> [!@bukzor] fb592418
>
> We _may_ want to impose "ask" permission on edits to files that are mostly
> high-learning-value.
