import { assert } from "./errors";

export function requireWebGPU(): GPU {
  assert(
    window.isSecureContext,
    "WebGPU needs a secure context (https or localhost)",
  );
  assert("gpu" in navigator, "this browser lacks WebGPU");
  return navigator.gpu;
}
