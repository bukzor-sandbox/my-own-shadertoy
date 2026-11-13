import { assert, reportUncaughtErrors } from "./errors";

reportUncaughtErrors();

function requireWebGPU(): GPU {
  assert(
    window.isSecureContext,
    "WebGPU needs a secure context (https or localhost)",
  );
  assert("gpu" in navigator, "this browser lacks WebGPU");
  return navigator.gpu;
}

async function main(): Promise<void> {
  const gpu = requireWebGPU();
  const adapter = await gpu.requestAdapter();
  assert(adapter !== null, "failed getting adapter");

  let key: keyof GPUAdapterInfo;
  for (key in adapter.info) {
    const val = adapter.info[key];
    document.body.append(key, ": ", String(val), document.createElement("br"));
  }
}

void main();
