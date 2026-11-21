---
label: FIRST_INSTANCE
standing: user
why:
  - ../goals.kb/learning-ownership.md
authority:
  address: fb592418
  words:
    The parts I'll throw away I'm happy for Claude to own, after the first
    instance, yes.
---

# bukzor typed the first appearance of every concept

The first use in the codebase of each WebGPU API, each WGSL feature, and each
kind of throwaway part (the first panel, the first editor hook-up) was written
by bukzor. `git log` on the commit that introduced it is the check: bukzor's
sole work is committed apart from Claude's edits and carries no
`Co-Authored-By: Claude` trailer, so a commit without one holds nothing Claude
wrote. That it is not a paste of Claude's output git cannot show; that half
rests on bukzor.

> [!@bukzor] 6307adfb
>
> Commit bukzor's sole work apart from your edits, without the `Co-Authored-By`
> trailer (`FIRST_INSTANCE`).
