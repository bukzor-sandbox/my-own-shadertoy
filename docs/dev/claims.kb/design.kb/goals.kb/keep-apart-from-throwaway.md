---
label: KEEP_APART_FROM_THROWAWAY
standing: user
why:
  - ../mission.md
authority:
  address: fb592418
  words:
    ensure the parts I'll throw away "down the line" and the parts i'll keep are
    separated
---

# What survives a host-language swap is kept apart from what does not

The program model and the WebGPU interpreter of it are kept; they carry the
learning. The authoring and display side (editor, panels, app wiring) is
expected to be replaced when authoring moves to Pyodide, Rust wasm, or Lean
wasm. The two never share a file, so the replacement is a deletion.

> [!@bukzor] fb592418
>
> I'd like to, somehow, ensure the parts I'll throw away "down the line" and the
> parts i'll keep are separated.
