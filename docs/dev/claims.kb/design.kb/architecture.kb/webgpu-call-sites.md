---
label: WEBGPU_CALL_SITES
standing: user
author: agent
todo: true
why:
  - ../requirements.kb/swap-survives.md
  - lifetime-groups.md
---

# WebGPU calls stay in two groups

WebGPU calls appear only in gpu and passes packages. TypeScript 7's DOM lib
declares the WebGPU interfaces, so every package can see them and no dependency
scoping can hide them; the group `CLAUDE.md` files and review hold this line.
