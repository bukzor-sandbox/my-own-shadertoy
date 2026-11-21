# Before starting milestone 1.1

Milestone 1.1 brings the codebase's first WGSL, and a compute pass writing a
storage texture that only its blit pass can show.

- Decide with bukzor how WGSL sources are typed and loaded, before the first
  shader is written. Record the ruling in [WGSL_SOURCES] and drop its `todo:`.
- Suggest bukzor install the WebGPU Inspector browser extension first: a blank
  page cannot say which pass failed, and the Inspector shows texture contents
  and every submitted command. Then drop `todo:` from [WEBGPU_INSPECTOR].

Delete this file once both claims have dropped `todo:`.

[WGSL_SOURCES]:
  ../../../docs/dev/claims.kb/design.kb/deliverables.kb/wgsl-sources.md
[WEBGPU_INSPECTOR]:
  ../../../docs/dev/claims.kb/design.kb/deliverables.kb/webgpu-inspector.md
