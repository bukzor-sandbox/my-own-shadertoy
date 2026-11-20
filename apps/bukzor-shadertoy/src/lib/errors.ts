export function assert(cond: unknown, message: string): asserts cond {
  if (!cond) {
    throw new Error(message);
  }
}

// String() suits Errors and plain values, but WebGPU's GPUError and
// GPUDeviceLostInfo are not Errors: they print as "[object ...]", and their
// text is in `.message`. An Error's stack is dropped too.
export function showError(error: unknown): void {
  const pre = document.createElement("pre");
  pre.textContent = String(error);
  document.body.append(pre);
}

export function showUncaughtErrors(): void {
  window.addEventListener("error", (event) => {
    showError(event.error ?? event.message);
  });
  window.addEventListener("unhandledrejection", (event) => {
    showError(event.reason);
  });
}
