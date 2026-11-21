# packages/gpu -- kept; bukzor writes

WebGPU glue: device, surfaces, resources, and the runner that interprets a
program on the GPU. This is where the learning lives, and it survives the
host-language swap.

- Depends on `packages/program` only. WebGPU calls belong here and in
  `packages/passes`, nowhere else. The types come from TypeScript's DOM lib,
  except the flag constants (`GPUBufferUsage`, ...), which come from
  `@webgpu/types` (`WEBGPU_TYPES_PACKAGE`).
- Claude writes here only what bukzor directly asks for, and declines when the
  request is the learning (root `CLAUDE.md`, "Who writes what"), which includes
  every first use `FIRST_INSTANCE` covers.
- New package: `bin/new-package gpu/<thing> '<its one job>'`.
