---
label: WEBGPU_TYPES_PACKAGE
standing: user
author: agent
why:
  - dependency-direction.md
---

# `@webgpu/types` supplies what the DOM lib's WebGPU types lack

A workspace that needs something TypeScript's DOM lib lacks lists
`@webgpu/types` in its `devDependencies` and names it in the `types:` of its own
`tsconfig.json`. The WebGPU spec group maintains it, so it tracks the spec
sooner than TypeScript releases do. It adds what TypeScript's DOM lib lacks or
mistypes, starting with the flag constants (`GPUBufferUsage`, `GPUTextureUsage`,
`GPUShaderStage`, ...), which TypeScript 7.0.2 declares only as `number` types.
A workspace that doesn't declare the package lacks them, so a flag constant in
`ui/` fails its typecheck.

The base `tsconfig.base.json` keeps `types: []`: naming the package there would
make it visible to every workspace whether or not that workspace declares it.

> [!@bukzor] 1b724c86
>
> This deserves a note somewhere.

> [!@bukzor] 4eef9346
>
> Making it visible repo-wide is the wrong direction; it doesn't belong in the
> base config.
