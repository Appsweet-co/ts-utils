/**
 * Returns true if `x` is null or undefined.
 *
 * @example
 *
 * ```ts
 * isNil(null);
 * // => true
 *
 * isNil(undefined);
 * // => true
 *
 * isNil('anything else');
 * // => false
 * ```
 */
export const isNil = (x: any) => x === null || x === void 0;
