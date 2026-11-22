import { getCanvasContext } from "@repo/gpu-canvas-surface";
import { requestDevice } from "@repo/gpu-device";

import { showUncaughtErrors } from "../../lib/errors";

async function main(): Promise<void> {
  showUncaughtErrors();

  const { device } = await requestDevice();
  const { context } = getCanvasContext("webgpu", device);
  const texture = context.getCurrentTexture();

  const commandEncoder = device.createCommandEncoder();
  const renderPass = commandEncoder.beginRenderPass({
    colorAttachments: [
      {
        clearValue: [0.9, 0.7, 0.2, 1],
        view: texture,
        loadOp: "clear",
        storeOp: "store",
      },
    ],
  });
  renderPass.end();
  const commands = commandEncoder.finish();
  device.queue.submit([commands]);
}

void main();
