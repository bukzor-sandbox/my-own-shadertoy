import { assert } from "./assert";

export class DeviceLostError extends Error {
  override readonly name = "DeviceLostError";
  // `declare`: super() sets `cause`. A plain field declaration would emit a
  // class field, which redefines `cause` as undefined after super() returns.
  declare readonly cause: GPUDeviceLostInfo;

  constructor(info: GPUDeviceLostInfo) {
    super(`device lost (${info.reason}): ${info.message}`, { cause: info });
  }
}

export class UncapturedGPUError extends Error {
  override readonly name = "UncapturedGPUError";
  // `declare`: super() sets `cause`. A plain field declaration would emit a
  // class field, which redefines `cause` as undefined after super() returns.
  declare readonly cause: GPUError;

  constructor(error: GPUError) {
    super(`${error.constructor.name}: ${error.message}`, {
      cause: error,
    });
  }
}

export function requireGPU(): GPU {
  assert(
    window.isSecureContext,
    "WebGPU needs a secure context (https or localhost)",
  );
  assert("gpu" in navigator, "this browser lacks WebGPU");
  return navigator.gpu;
}

export async function init() {
  const gpu = requireGPU();
  const adapter = await gpu.requestAdapter();
  assert(adapter !== null, "failed getting adapter");

  const device = await adapter.requestDevice();
  device.addEventListener("uncapturederror", (event) => {
    // The throw below reaches the console; this cancels the browser's own
    // report of the same error there.
    event.preventDefault();
    throw new UncapturedGPUError(event.error);
  });
  const lost = device.lost.then((info) => {
    throw new DeviceLostError(info);
  });

  return {
    gpu,
    adapter,
    device,
    lost, // rejects with DeviceLostError
  };
}
