---
label: ARCHITECTURE
standing: user
why:
  - requirements.md
ontology:
  - program
  - pass
  - pass kind
  - interpreter
  - lifetime group
---

# Architecture

A **program** is data: an ordered list of **passes**, each of one **pass kind**,
with WGSL source and named inputs and outputs. An **interpreter** turns a
program into effects. The code is grouped by **lifetime group**: whether it
survives the host-language swap.
