# When TypeScript lacks a type

A typecheck error says a name or member doesn't exist, or gives it the wrong
type, though the platform has it: a WebGPU flag constant, a newer DOM API, a
Node global.

Find the package that declares it (`@webgpu/types` for WebGPU, `@types/node` for
Node). Add that package to the failing workspace's `devDependencies` and to the
`types:` of its own `tsconfig.json`, never the base config
([WEBGPU_TYPES_PACKAGE]). If the workspace already declares it, the package
lags: update it.

[WEBGPU_TYPES_PACKAGE]:
  ../../../docs/dev/claims.kb/design.kb/deliverables.kb/webgpu-types-package.md
