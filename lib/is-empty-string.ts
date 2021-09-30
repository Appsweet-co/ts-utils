/**
 * Returns true if `x` is a string with a length of zero.
 *
 * @example
 *
 * ```ts
 * const empty = '';
 * isEmptyString(empty);
 * // => true
 *
 * const notEmpty = 'foo';
 * isEmptyString(notEmpty);
 * // => false
 *
 * const notString = {};
 * isEmptyString(notString);
 * // => false
 * ```
 */
export const isEmptyString = (x: any) => typeof x === 'string' && x.length === 0;
