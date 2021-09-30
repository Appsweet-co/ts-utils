/**
 * Returns true if `x` is an array with a length of zero.
 *
 * @example
 *
 * ```ts
 * const list = [];
 * isEmptyArray(list);
 * // => true
 *
 * const notEmpty = ['1', '2', '3', '0', '4', '5'];
 * isEmptyArray(notEmpty);
 * // => false
 *
 * const notArray = 'foo';
 * isEmptyArray(notArray);
 * // => false
 * ```
 */
export const isEmptyArray = (x: any) => Array.isArray(x) && x.length === 0;
