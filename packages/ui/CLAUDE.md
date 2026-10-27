# packages/ui -- throwaway; Claude may write after the first instance

Editor, panels, and display widgets, one package each. Replaced wholesale when
authoring moves off TypeScript.

- May depend on `packages/program`, `packages/gpu`, `packages/passes`. Nothing
  outside this group and `apps/` may depend on it.
- No WebGPU calls here: a panel that needs GPU data gets it from a gpu package's
  API.
- bukzor writes the first instance of each kind of part (first panel, first
  editor). After that, Claude may write freely here.
- No UI framework; plain DOM.
- New package: `bin/new-package ui/<thing> '<its one job>'`.
