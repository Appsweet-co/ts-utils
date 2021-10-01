/**
 * Returns true of `x` is true.
 *
 * @example
 *
 * ```ts
 * [true, true, true].every(isTrue);
 * // => true
 *
 * [true, true, false].every(isTrue);
 * // => false
 * ```
 */
export const isTrue = (x: boolean) => x === true;
