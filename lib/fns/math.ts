/** Returns the larger of two values. Same as `Math.max(a, b)`. */
export const max = (a: number) => (b: number) => Math.max(a, b);

/** Returns the smaller of two values. Same as `Math.min(a, b)`. */
export const min = (a: number) => (b: number) => Math.min(a, b);

/** Returns a number between `min` and `max` values. */
export const clamp = (min: number) => (max: number) => (val: number): number => Math.max(min, Math.min(val, max));

/**
 * Returns an array of numbers between `min` and `max` values.
 * 
 * Values are inclusive.
 * 
 * Returns all values between `min` and `max` by default. Pass in a `step` to
 * change the granularity. 
 * 
 * @example
 * 
 * ```ts
 * range({ min: 0, max: 6 });
 * // => [0, 1, 2, 3, 4, 5, 6]
 * 
 * range({ min: 0, max: 6, step: 2 });
 * // => [0, 2, 4, 6] 
 * ```
 */
export const range = ({ min, max, step = 1 }: { min: number, max: number, step?: number }): readonly number[] => {
  return (min > max) ? [] : [min, ...range({ min: min + 1, max, step })].filter(x => x % step === 0)
}

/** Returns the next number in the range bewteen `min` and `max` values. */
export const wrap = (min: number) => (max: number) => (val: number): number => 
  (min <= val && val <= max) ? val : range({min, max})[(val % max) - 1];

/** Increments a value by one. */
export const inc = (x: number) => x + 1;

/** Decrements a value by one. */
export const dec = (x: number) => x - 1;

/** Returns the modulus of two numbers. Same as `x % m`. */
export const mod = (m: number) => (x: number) => x % m;

/** Negates a number. Same as `-x`. */
export const neg = (x: number) => -x;

/**  Returns the decimal fraction of a value compared against a `min` and `max`. */
export const ratio = (min: number) => (max: number) => (val: number): number => (val - min) / (max - min);

/** Returns the numerical percentage of a value compared against a `min` and `max`. */
export const percent = (min: number) => (max: number) => (val: number): number => ratio(min)(max)(val) * 100;

/** Returns the value of number raised to a specified power. Same as `Math.pow(x, e)`. */
export const pow = (e: number) => (x: number): number => Math.pow(x, e);

/** Adds two numbers. Same as `b + a`. */
export const add = (a: number) => (b: number): number => b + a;

/** Subtracts two numbers. Same as `b - a`. */
export const sub = (a: number) => (b: number): number => b - a;

/** Multiplies two numbers. Same as `b * a`. */
export const mult = (a: number) => (b: number): number => b * a;

/** Divides two numbers. Same as `b / a`. */
export const div = (a: number) => (b: number): number => b / a;

/** Rounds a number to the nearest multiple of `base`. */
export const nearest = (base: number) => (x: number): number => Math.round(x / base) * base;

/** Rounds a number up to the nearest multiple of `base`. */
export const up = (base: number) => (x: number): number => Math.ceil(x / base) * base;

/** Rounds a number down to the nearest multiple of `base`. */
export const down = (base: number) => (x: number): number => Math.floor(x / base) * base;
