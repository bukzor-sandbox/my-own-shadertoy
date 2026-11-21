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

The first use in the codebase of each concept that is relevant to the project's
work and new to bukzor, whoever defines it, was written by bukzor. WebGPU APIs
and WGSL features are the common case, not the boundary. Each kind of throwaway
part (the first panel, the first editor hook-up) counts too. The check is
bukzor's confirmation, at each milestone's landing, of the first uses listed in
its `first-uses:` (each with `evidence:`, where the code shows it). A listed use
is one bukzor confirmed. A violation is not recorded: it is routed to
[`when/claude-wrote-more-in-a-kept-group-than-asked.md`][violation] (evidence
for [ASK_BEFORE_EDITING_KEPT]) and fixed.

A commit's `Co-Authored-By` trailer cannot be it: the trailer means the commit
is not bukzor's sole work, and bukzor's commits often carry a little of Claude's
help.

> [!@bukzor] 6307adfb
>
> I think the bar should be whether it's A) relevant B) learning.

> [!@bukzor] 6307adfb
>
> It's going to be not-unusual for me to get a bit of help from claude, so "sole
> work" is a high bar, yet the right bar for a "co-authored by" trailer.

[violation]:
  ../../../../../.claude/must-read.kb/when/claude-wrote-more-in-a-kept-group-than-asked.md
[ASK_BEFORE_EDITING_KEPT]: ../../technical-policy.kb/ask-before-editing-kept.md
