/**
 * Returns true if `x` is null or undefined.
 *
 * @example
 *
 * ```ts
 * const item = null;
 * isNil(item);
 * // => true;
 *
 * const item = undefined;
 * isNil(item);
 * // => true;
 *
 * const item = 'anything else';
 * isNil(item);
 * // => false
 * ```
 */
export const isNil = (x: any) => x === null || x === void 0;
