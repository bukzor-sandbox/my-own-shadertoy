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
by bukzor. The check prints every recorded first use not typed by bukzor; empty
output means the requirement holds:

```sh
md-frontmatter docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.kb/*.md |
  jq -r '."@value"["first-uses"][]? | select(.by != "bukzor") | .use'
```

A commit's `Co-Authored-By` trailer cannot be it: the trailer means the commit
is not bukzor's sole work, and bukzor's commits often carry a little of Claude's
help.

> [!@bukzor] 6307adfb
>
> It's going to be not-unusual for me to get a bit of help from claude, so "sole
> work" is a high bar, yet the right bar for a "co-authored by" trailer.
