export function htmlTag<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  ...children: (Node | string)[]
): HTMLElementTagNameMap[K] {
  const result = document.createElement(tag);
  result.append(...children);
  return result;
}

function* describeProperties(obj: object): Iterable<string> {
  for (const key in obj) {
    yield `${key}: ${String(Reflect.get(obj, key))}`;
  }
}

function* describeSection(
  name: string,
  obj: object,
  lines: Iterable<string>,
): Iterable<Node | string> {
  yield htmlTag("h3", name);
  yield htmlTag("i", "type: ", obj.constructor.name);
  yield htmlTag("br");
  yield htmlTag("br");
  for (const line of lines) {
    yield* [line, htmlTag("br")];
  }
}

// An iterable's content is its members, not its properties: describe a set
// with describeSet. Only the caller's static type knows which view is right.
type NotIterable = object & { [Symbol.iterator]?: never };

export function describeObject(
  name: string,
  obj: NotIterable,
): Iterable<Node | string> {
  return describeSection(name, obj, describeProperties(obj));
}

export function describeSet(
  name: string,
  set: ReadonlySet<string>,
): Iterable<Node | string> {
  return describeSection(name, set, [...set].toSorted());
}
