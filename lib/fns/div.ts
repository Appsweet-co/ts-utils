/**
 * Divides the first argument by the second.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#divide).
 *
 * @example
 *
 * ```ts
 * div(9 / 6);
 * // => 1.5
 *
 * div(6 / 9);
 * // => 0.666...
 *
 * div(0 / 9);
 * // => 0
 *
 * div(9 / 0);
 * // => Infinity
 * ```
 */
export const div = (a: number, b: number) => a / b;
