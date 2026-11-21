function showText(message: string): void {
  const pre = document.createElement("pre");
  pre.classList.add("error");
  pre.textContent = message;
  document.body.append(pre);
}

// What Error, GPUError, and GPUDeviceLostInfo have in common. An event is not
// one: GPUUncapturedErrorEvent holds its GPUError in `.error`.
export interface ErrorLike {
  readonly message: string;
}

// An Error's stack starts with its name and message. Other classes' names say
// which kind of error: GPUValidationError, GPUOutOfMemoryError, ... An Error's
// cause, if any, follows on its own line.
function describeError(error: ErrorLike): string {
  if (!(error instanceof Error)) {
    return `${error.constructor.name}: ${error.message}`;
  }
  const text = error.stack ?? `${error.name}: ${error.message}`;
  return error.cause === undefined
    ? text
    : `${text}\nCaused by: ${describeUnknown(error.cause)}`;
}

export function showError(error: ErrorLike): void {
  showText(describeError(error));
}

function isErrorLike(value: unknown): value is ErrorLike {
  return (
    typeof value === "object" &&
    value !== null &&
    "message" in value &&
    typeof value.message === "string"
  );
}

// Anything can be thrown or rejected; only some of it is ErrorLike.
function describeUnknown(value: unknown): string {
  return isErrorLike(value) ? describeError(value) : String(value);
}

export function showUncaughtErrors(): void {
  window.addEventListener("error", (event) => {
    showText(describeUnknown(event.error ?? event.message));
  });
  window.addEventListener("unhandledrejection", (event) => {
    showText(describeUnknown(event.reason));
  });
}
