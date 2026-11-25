---
label: HELPER_LIBRARIES
standing: user
author: agent
todo: true
why:
  - milestone-ladder.md
  - ../goals.kb/learning-ownership.md
---

# Community WebGPU libraries are discussed when they come up, or when the queue is empty

Tripwire: the first of these:

- work in hand is something one of these libraries does, and bukzor has already
  done it by hand once;
- nothing else is queued.

Then raise it with bukzor, to adopt or record a decline:

- `webgpu-utils` (greggman): struct layouts read from WGSL, typed buffer views,
  mipmaps. It overlaps milestone 2.1's computed uniform layout.
- `wgpu-matrix`: vector and matrix math, first needed for milestone 7.1's mesh
  pass.
- TypeGPU (Software Mansion): typed buffer schemas and shaders written in
  TypeScript, an alternative to the program model itself.

The hand-done-once condition keeps a library from doing work bukzor is meant to
learn by hand.

> [!@bukzor] 1b724c86
>
> I'd like a note to perhaps visit these after current goals are met. More
> flexible: seen and discussed when or if it comes up, or else once we have
> nothing else to do.
