declare const clamp: (min: number, max: number, val: number) => number;
declare const clampC: (min: number) => (max: number) => (val: number) => number;
export { clamp, clampC };
