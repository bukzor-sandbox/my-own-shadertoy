function htmlTag<K extends keyof HTMLElementTagNameMap>(
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
  typeName: string,
  lines: Iterable<string>,
): Iterable<Node | string> {
  yield htmlTag("h3", name);
  yield htmlTag("i", "type: ", typeName);
  yield htmlTag("br");
  yield htmlTag("br");
  for (const line of lines) {
    yield* [line, htmlTag("br")];
  }
}

export function describeObject(
  name: string,
  obj: object,
): Iterable<Node | string> {
  return describeSection(name, obj.constructor.name, describeProperties(obj));
}

export function describeSet(
  name: string,
  set: ReadonlySet<string>,
): Iterable<Node | string> {
  return describeSection(name, set.constructor.name, [...set].toSorted());
}
