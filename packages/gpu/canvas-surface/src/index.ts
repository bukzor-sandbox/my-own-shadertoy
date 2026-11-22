function assert(cond: unknown, message: string): asserts cond {
  if (!cond) {
    throw new Error(message);
  }
}

export function getCanvasContext(
  id: string,
  device: GPUDevice,
  format: GPUTextureFormat = navigator.gpu.getPreferredCanvasFormat(),
) {
  const canvas = document.getElementById(id);

  assert(canvas !== null, "failed getting canvas");
  assert(canvas instanceof HTMLCanvasElement, "canvas isn't canvas?!");

  const context = canvas.getContext("webgpu");
  assert(context !== null, "failed getting GPUCanvasContext");

  context.configure({ device, format });

  return {
    canvas,
    context,
    format,
  };
}
