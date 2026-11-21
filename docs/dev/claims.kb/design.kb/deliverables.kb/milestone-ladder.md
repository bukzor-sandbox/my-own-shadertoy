---
label: MILESTONE_LADDER
standing: user
author: agent
why:
  - ../goals.kb/api-coverage.md
  - ../goals.kb/bite-sized-increments.md
  - ../architecture.kb/one-thing-per-package.md
---

# The milestone ladder

The milestones are built in one linear order, one claim each in
`milestone-ladder.kb/`. Each states what lands, then the packages it introduces;
package names are first guesses, corrected at each milestone.

> [!@bukzor] 6307adfb -- asked whether the ladder should stay one file or be
> promoted to a collection of one claim per milestone: "promotion, imo".

- **Order is the file name.** A milestone's file is its number, zero-padded so
  `ls` lists the ladder in order, then a slug for what it builds
  (`00.1-adapter-and-device.md`). Its label is the number: `MILESTONE_0_1`.
- **A milestone that turns out too large splits in place** into `N.M`
  sub-milestones, so nothing renumbers.
- **Landed means the milestone's claim has no `todo: true`.** It drops the key
  when its commit is in. The next milestone is the first still carrying it:
  `grep -l '^todo: true' docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.kb/*.md | head -n1`.
- **A landed milestone records its first uses** of concepts relevant to the work
  and new to bukzor in `first-uses:`, each with the code that shows it
  (`evidence:`). Claude lists generously; bukzor strikes what wasn't learning
  and confirms the rest at landing ([FIRST_INSTANCE]).

Declined: a separately scheduled bind-group-layout refactor after multipass. The
lesson arrives with the feature that forces it, so scheduling it apart is
planned debt.

[FIRST_INSTANCE]: ../requirements.kb/first-instances-are-bukzors.md
