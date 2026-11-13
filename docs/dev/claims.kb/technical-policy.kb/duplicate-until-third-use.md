---
label: THIRD_USE
standing: user
force: should
why:
  - ../design.kb/goals.kb/legible-growth.md
---

# Duplicate until the third use

Code is copied, not abstracted, until its third use. Two copies don't yet show
which parts vary; an abstraction drawn from them guesses. This governs code
inside packages and the session tooling alike: a repo-local skill is written at
the third time a procedure is repeated by hand.
