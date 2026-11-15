# pages -- one directory per URL

Each page is `<name>/index.html` plus its entry script `<name>/main.ts`, served
at `/<name>/` (`vite.config.ts` sets this directory as Vite's root). Library
code lives in `../lib/`.

> [!@bukzor] 2026-11-15 -- when adding a third page, revisit Vite multi-page
> plugins (`vite-plugin-mpa` scans `src/pages/*/` and wires build inputs and dev
> URLs), before hand-listing build inputs.
