---
label: MILESTONE_LADDER
standing: user
author: agent
why:
  - ../goals.kb/api-coverage.md
  - ../goals.kb/bite-sized-increments.md
  - ../requirements.kb/one-job-each.md
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
- **Each milestone has one job** ([ONE_JOB]) and is as small as still means
  something ([BITE_SIZED]). A lesson lands with the milestone whose job needs
  it; a concept no milestone's job needs gets a milestone of its own.
- **A milestone that turns out too large splits in place** into `N.M`
  sub-milestones, so nothing renumbers.
- **Landed means the milestone's claim has no `todo: true`.** It drops the key
  when its commit is in. The next milestone is the first still carrying it:
  `grep -l '^todo: true' docs/dev/claims.kb/design.kb/deliverables.kb/milestone-ladder.kb/*.md | sed -n 1p`.
- **A landed milestone records its first uses** of concepts relevant to the work
  and new to bukzor in `first-uses:`, each with the code that shows it
  (`evidence:`). Claude lists generously; bukzor strikes what wasn't learning
  and confirms the rest at landing ([FIRST_INSTANCE]).

Declined: a separately scheduled bind-group-layout refactor after multipass. The
lesson lands with 3.1, whose job forces it; scheduled apart, it is planned debt.

Conventions: [llm-design-kb] over [llm-claims-kb].

[FIRST_INSTANCE]: ../requirements.kb/first-instances-are-bukzors.md
[ONE_JOB]: ../requirements.kb/one-job-each.md
[BITE_SIZED]: ../goals.kb/bite-sized-increments.md
[llm-design-kb]:
  https://github.com/bukzor/bukzor-agent-skills/blob/main/llm-design-kb/SKILL.md
[llm-claims-kb]:
  https://github.com/bukzor/bukzor-agent-skills/blob/main/llm-claims-kb/SKILL.md
