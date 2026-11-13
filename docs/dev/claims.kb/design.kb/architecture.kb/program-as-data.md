---
label: PROGRAM_AS_DATA
standing: user
todo: true
why:
  - ../requirements.kb/swap-survives.md
  - ../goals.kb/api-coverage.md
authority:
  address: fb592418
  words: it will shrink to "just" webgpu glue and free-monad interpreters
  about: the shape of the kept side
---

# A program is data, run by interpreters

A program is a plain, JSON-serializable value. Two interpreters read it: the GPU
runner, which creates the resources and encodes each frame, and a dry run, which
prints the resource plan and runs in node with no GPU. The dry run is what the
node tests exercise, and its existence is the proof that the program model
carries no WebGPU types.

The model is extracted from hand-written code (milestone 1.2), not designed
ahead of it: bukzor starts with no WebGPU practice, and an abstraction drawn
before the API is familiar would be a guess.
