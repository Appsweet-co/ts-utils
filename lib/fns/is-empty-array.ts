/**
 * Returns true if `x` is an array with a length of zero.
 *
 * @example
 *
 * ```ts
 * isEmptyArray([]);
 * // => true
 *
 * isEmptyArray(['not', 'empty']);
 * // => false
 *
 * isEmptyArray('not an array');
 * // => false
 * ```
 */
export const isEmptyArray = (x: unknown) => Array.isArray(x) && x.length === 0;
