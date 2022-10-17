import { last, split } from './array';

const _props = (path: string) => <T>(data: T): T[keyof T] => {
  const keys = path.split('.');
  return keys.reduce((acc, key) => (acc[key] ?? void 0) as unknown, data) as T[keyof T];
};

/**
 * Returns the value for `path`, or `fallback` if the value is null or undefined.
 *
 * The `path` is a string of dot-separated keys (`foo.bar.baz`). The `data` is an object of any depth.
 *
 * @example
 *
 * ```ts
 * props('Fallback')('a.b')({ a { b: 'Hello World' } })
 * // => "Hello World"
 *
 * props('Fallback')('a.b.c')({ a { b: 'Hello World' } })
 * // => "Fallback"
 * ```
 */
export const props = <R>(fallback: R) => (path: string) => <T>(data: T): R => {
  const value = _props(path)(data) as unknown as R;
  return value ?? fallback;
};

/**
 * Returns a shallow object made of only the keys and values for each path.
 *
 * @example
 *
 * ```ts
 * pick(['hello', 'foo.bar'])({
 *   hello: "world",
 *   foo: {
 *     bar: "zip"
 *   }
 * })
 * // => { hello: "world", bar: "zip" }
 * ```
 */
export const pick = (paths: string[]) => <T>(data: T) => Object.fromEntries(
  paths.map(path => [last(split('.')(path)), _props(path)(data)])
);
