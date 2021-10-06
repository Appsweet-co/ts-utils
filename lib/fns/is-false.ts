/**
 * Returns true if `x` is false.
 *
 * @example
 *
 * ```ts
 * [false, false, false].every(isFalse);
 * // => true
 *
 * [false, false, true].every(isFalse);
 * // => false
 * ```
 */
export const isFalse = (x: boolean) => x === false;
