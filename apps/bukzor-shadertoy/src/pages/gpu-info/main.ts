import { requireWebGPU } from "../../lib/device-and-adapter";
import { assert, showError, showUncaughtErrors } from "../../lib/errors";
import { describeObject, describeSet } from "../../lib/html-gen";

showUncaughtErrors();

function* describeAdapter(adapter: GPUAdapter): Iterable<Node | string> {
  yield* describeObject("adapter.info", adapter.info);
  yield* describeSet("adapter.features", adapter.features);
  yield* describeObject("adapter.limits", adapter.limits);
}

function* describeDevice(device: GPUDevice): Iterable<Node | string> {
  yield* describeSet("device.features", device.features);
  yield* describeObject("device.limits", device.limits);
}

async function main(): Promise<void> {
  const gpu = requireWebGPU();
  const adapter = await gpu.requestAdapter();
  assert(adapter !== null, "failed getting adapter");

  document.body.append(...describeAdapter(adapter));

  const device = await adapter.requestDevice();
  device.onuncapturederror = (event) => {
    showError(event.error);
  };
  void device.lost.then(showError);

  document.body.append(...describeDevice(device));
}

void main();
