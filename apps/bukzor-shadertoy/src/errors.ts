export function assert(cond: unknown, message: string): asserts cond {
  if (!cond) {
    throw new Error(message);
  }
}

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
