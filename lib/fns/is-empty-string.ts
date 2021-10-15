/**
 * Returns true if `x` is a string with a length of zero.
 *
 * @example
 *
 * ```ts
 * isEmptyString('');
 * // => true
 *
 * isEmptyString('foo');
 * // => false
 *
 * isEmptyString(['not', 'a', 'string']);
 * // => false
 * ```
 */
export const isEmptyString = (x: unknown) => typeof x === 'string' && x.length === 0;
