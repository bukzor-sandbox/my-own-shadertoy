type Shape = "circle" | "square";

export function corners(shape: Shape): number {
  switch (shape) {
    case "circle":
      return 0;
    default:
      return 4;
  }
}
