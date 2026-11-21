---
label: WEBGPU_INSPECTOR
standing: user
author: agent
todo: true
why:
  - milestone-ladder.kb/01.1-hand-written-compute-and-blit.md
---

# The WebGPU Inspector extension is installed when milestone 1.1 starts

Tripwire: milestone 1.1 starts. Its compute pass writes a storage texture that
the page can show only through the blit pass, so a blank page cannot say which
pass failed. The WebGPU Inspector browser extension shows a texture's contents
and every command submitted, and settles that question.

> [!@bukzor] 1b724c86
>
> Probably should install this at some juncture.
