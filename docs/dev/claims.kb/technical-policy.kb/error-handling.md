---
label: ERROR_HANDLING
standing: user
author: agent
force: should
why:
  - ../design.kb/requirements.kb/one-job-each.md
  - ../design.kb/goals.kb/keep-apart-from-throwaway.md
---

# Packages surface errors; apps display them

A package never shows an error and never swallows one: every failure leaves it
as a thrown or rejected `Error` subclass. The app shows whatever reaches its
global `error` and `unhandledrejection` handlers. That default costs a package
nothing and presumes nothing about its caller, which may catch first.

- A failure that callers tell apart gets its own `Error` subclass, its `name`
  set so the stack says which.
- Cases within one failure are a union-typed field the caller switches on, and
  the object that reported the failure travels as `cause`.
- A WebGPU channel that does not escalate by itself is escalated by the package
  that owns it: `device.lost` resolves rather than rejects, and an unhandled
  `uncapturederror` reaches only the devtools console.

Declined: a result value (`{ ok: false, ... }`) for failures. An unread result
vanishes, where an exception escalates by default. Lint holds the `Error` half
(`typescript/only-throw-error`, `typescript/prefer-promise-reject-errors`).

> [!@bukzor] 3443f841 -- I'd like "good defaults" baked into the extracted
> libraries, without making them overspecific. In Python I'd make fairly
> specific exception types, thrown with enough attributes that the cases that
> should be distinguishable can be (e.g. `reason="destroyed"`).
