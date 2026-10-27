---
label: LIFETIME_GROUPS
standing: user
why:
  - ../goals.kb/keep-apart-from-throwaway.md
  - ../goals.kb/learning-ownership.md
authority:
  address: fb592418
  words:
    Perhaps a bit of subpathing under packages would do it? packages/ui/... can
    have its own claudefile
---

# Code is grouped by lifetime, and each group says who writes it

Each lifetime group is a directory whose `CLAUDE.md` names its lifetime, who
writes in it, and its invariants.

| group               | lifetime  |
| ------------------- | --------- |
| `packages/program/` | kept      |
| `packages/gpu/`     | kept      |
| `packages/passes/`  | kept      |
| `packages/ui/`      | throwaway |
| `apps/`             | throwaway |

A thing whose lifetime is unclear goes in a kept group: misfiling a kept thing
as throwaway costs more than the reverse.
