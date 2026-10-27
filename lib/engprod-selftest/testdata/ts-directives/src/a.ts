// @ts-ignore
export const ignored: number = "x";

// @ts-expect-error
export const undescribed: number = "x";

// @ts-expect-error -- deliberate type error for this fixture
export const described: number = "x";
