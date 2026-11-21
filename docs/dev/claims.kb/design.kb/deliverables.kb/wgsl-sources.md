---
label: WGSL_SOURCES
standing: user
author: agent
todo: true
why:
  - ../architecture.kb/program-as-data.md
  - milestone-ladder.kb/01.1-hand-written-compute-and-blit.md
authority:
  address: d02f4153
  words: please create the missing trigger
  about:
    the todo "Decide how WGSL sources are typed and loaded, before milestone
    1.1"
---

# How WGSL sources are typed and loaded is decided before milestone 1.1

Tripwire: milestone 1.1 starts. Its two passes are the codebase's first WGSL,
and whatever they do first sets where WGSL lives (`.wgsl` files or strings in
TypeScript), how TypeScript sees it, and how it reaches the GPU. A program
carries its WGSL as data (`PROGRAM_AS_DATA`), so the choice also shapes what
milestone 1.2 extracts. Decide it with bukzor before 1.1's first shader, and
record the ruling here.
