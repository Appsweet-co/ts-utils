/**
 * Stringify a value, or return the original if it's already a string.
 *
 * @example
 *
 * ```ts
 * stringify(123);
 * // => '123'
 *
 * stringify('foobar');
 * // => 'foobar'
 * ```
 */
export const stringify = (x: unknown) => typeof x === 'string' ? x : JSON.stringify(x);
