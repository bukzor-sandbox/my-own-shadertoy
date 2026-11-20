---
label: ASSERT_LIBRARY
standing: user
author: agent
todo: true
why:
  - ../../technical-policy.kb/duplicate-until-third-use.md
---

# Whether `tiny-invariant` can replace `assert` is checked at its third copy

Low priority. Tripwire: `assert` is copied a third time, the point where
`THIRD_USE` makes it shared code. Then check whether `tiny-invariant`, the
common library for assertion functions, can be told to keep its messages: by
default it strips them from production builds, and here the messages are what
the page shows.

> [!@bukzor] 1b724c86
>
> I wonder if there's not a way to ask it to do what I want, here.
