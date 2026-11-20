import { requireWebGPU } from "../../lib/device-and-adapter";
import { assert, showUncaughtErrors } from "../../lib/errors";
import { describeObject, describeSet } from "../../lib/html-gen";

showUncaughtErrors();

function* describeAdapter(adapter: GPUAdapter): Iterable<Node | string> {
  yield* describeObject("adapter.info", adapter.info);
  yield* describeSet("adapter.features", adapter.features);
  yield* describeObject("adapter.limits", adapter.limits);
}

async function main(): Promise<void> {
  const gpu = requireWebGPU();
  const adapter = await gpu.requestAdapter();
  assert(adapter !== null, "failed getting adapter");

  document.body.append(...describeAdapter(adapter));
}

void main();
