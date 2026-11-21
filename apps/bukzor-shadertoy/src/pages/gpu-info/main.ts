import { requestAdapter, requestDevice } from "@repo/gpu-device";

import { showUncaughtErrors } from "../../lib/errors";
import { describeObject, describeSet, htmlTag } from "../../lib/html-gen";

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

// showUncaughtErrors appends each error to the end of the page, so each demo
// adds its heading, then provokes its error. Resolves once the error is shown:
// @repo/gpu-device's listener was added first, and its throw is reported before
// this one runs.
async function provokeUncapturedError(device: GPUDevice): Promise<void> {
  document.body.append(
    htmlTag("h3", "expected error: uncaptured"),
    htmlTag(
      "p",
      "MAP_READ | MAP_WRITE is an invalid buffer usage. The error below is ",
      "deliberate: it shows that an uncaptured GPU error reaches the page.",
    ),
  );
  const shown = new Promise<void>((resolve) => {
    device.addEventListener(
      "uncapturederror",
      () => {
        resolve();
      },
      {
        once: true,
      },
    );
  });
  device.createBuffer({
    size: 4,
    usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.MAP_WRITE,
  });
  device.queue.submit([]);
  await shown;
}

function provokeDeviceLoss(device: GPUDevice): void {
  document.body.append(
    htmlTag("h3", "expected error: device lost"),
    htmlTag(
      "p",
      "destroy() loses the device on purpose. The error below is deliberate: ",
      "it shows that an uncaught device loss reaches the page.",
    ),
  );
  device.destroy();
}

async function main(): Promise<void> {
  const adapter = await requestAdapter();
  const { device } = await requestDevice(adapter);

  document.body.append(...describeAdapter(adapter));
  document.body.append(...describeDevice(device));
  await provokeUncapturedError(device);
  provokeDeviceLoss(device);
}

void main();
