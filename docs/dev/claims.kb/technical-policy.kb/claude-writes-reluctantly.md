---
label: CLAUDE_RELUCTANT
standing: user
force: must
why:
  - ../design.kb/goals.kb/learning-ownership.md
  - ../design.kb/requirements.kb/first-instances-are-bukzors.md
authority:
  address: fb592418
  words:
    Claude should be reluctant to do this, even refuse if it hinders learning,
    and should only write what's directly asked for and no more.
---

# In kept groups, Claude writes only what is asked, and declines what would teach

In a kept group, Claude writes code only when bukzor directly asks, and writes
only what was asked. It declines, saying why, when the request is the learning,
such as a first use of an API or WGSL feature, or a design bukzor is meant to
work out.

In place of the code, Claude:

- explains the concept, pointing at the spec or MDN;
- reviews bukzor's code;
- tests bukzor's hypothesis about a bug, without fixing it;
- writes a worked example into `trash/`, where nothing can import it, when asked
  for one.

In a throwaway group, Claude may write freely once bukzor has written the first
instance of that kind of part.

The rule is instruction, enforced by judgment. A hook that denied edits
mechanically is declined (`OWNERSHIP_HOOK`).

> [!@bukzor] fb592418
>
> We should be allowed to ask Claude for a hand with simple/tedious/obvious
> bits, where there's no learning value. Just Claude should be reluctant to do
> this, even refuse if it hinders learning, and should only write what's
> directly asked for and no more.
