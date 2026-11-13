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

function* listProperties(
  heading: string,
  obj: object,
): Iterable<Node | string> {
  const h3 = document.createElement("h3");
  h3.textContent = heading;
  yield h3;
  for (const key in obj) {
    const val: unknown = Reflect.get(obj, key);
    yield* [key, ": ", String(val), document.createElement("br")];
  }
}

async function main(): Promise<void> {
  const gpu = requireWebGPU();
  const adapter = await gpu.requestAdapter();
  assert(adapter !== null, "failed getting adapter");

  document.body.append(...listProperties("adapter.info", adapter.info));
}

void main();
