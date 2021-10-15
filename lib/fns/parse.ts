/**
 * Parse a JSON string, or return the original.
 *
 * @example
 *
 * ```ts
 * parse('{"hello": "world"}');
 * // => { hello: 'world' }
 *
 * parse('foobar');
 * // => 'foobar'
 * ```
 */
export const parse = (x: string) => {
  try {
    return JSON.parse(x);
  } catch (e) {
    return x;
  }
};
