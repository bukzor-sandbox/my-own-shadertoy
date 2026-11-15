import { assert } from "./errors";

export function requireWebGPU(): GPU {
  assert(
    window.isSecureContext,
    "WebGPU needs a secure context (https or localhost)",
  );
  assert("gpu" in navigator, "this browser lacks WebGPU");
  return navigator.gpu;
}

function htmlTag<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  ...children: (Node | string)[]
): HTMLElementTagNameMap[K] {
  const result = document.createElement(tag);
  result.append(...children);
  return result;
}

function* propertyLines(obj: object): Iterable<string> {
  for (const key in obj) {
    yield `${key}: ${String(Reflect.get(obj, key))}`;
  }
}

export function* listObject(
  name: string,
  obj: object,
  lines: Iterable<string> = propertyLines(obj),
): Iterable<Node | string> {
  yield htmlTag("h3", name);
  yield htmlTag("i", "type: ", obj.constructor.name);
  yield htmlTag("br");
  yield htmlTag("br");
  for (const line of lines) {
    yield* [line, htmlTag("br")];
  }
}
