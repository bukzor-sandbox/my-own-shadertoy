# Before starting milestone 1.1

Milestone 1.1's compute pass writes a storage texture that only its blit pass
can show, so a blank page cannot say which pass failed.

Suggest bukzor install the WebGPU Inspector browser extension first: it shows
texture contents and every submitted command. Then drop `todo:` from
[WEBGPU_INSPECTOR] and delete this file.

[WEBGPU_INSPECTOR]:
  ../../../docs/dev/claims.kb/design.kb/deliverables.kb/webgpu-inspector.md
