declare const raw: any;
declare function takesNumber(n: number): void;

export function call(): void {
  raw();
}

export function member(): unknown {
  return raw.length;
}

export function argument(): void {
  takesNumber(raw);
}

export function ret(): number {
  return raw;
}
