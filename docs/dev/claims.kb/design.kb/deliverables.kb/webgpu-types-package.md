---
label: WEBGPU_TYPES_PACKAGE
standing: user
author: agent
todo: true
why:
  - ../architecture.kb/dependency-direction.md
---

# `@webgpu/types` replaces the DOM lib's WebGPU types once those lag

Tripwire: the first WebGPU API the code uses that TypeScript's DOM lib lacks or
mistypes. Then add `@webgpu/types`, maintained by the WebGPU spec group, which
tracks spec changes sooner than TypeScript releases do. It needs naming in the
`types:` of `tsconfig.base.json`, which is empty, and `DEPENDENCY_DIRECTION`'s
sentence on where the types come from changes with it.

> [!@bukzor] 1b724c86
>
> This deserves a note somewhere.
