import { isNil } from './predicate';

/**
 * Returns the value for `path`, or undefined if there is no value.
 *
 * The `path` is a string of dot-separated keys (`foo.bar.baz`). The `data` is an object of any depth.
 *
 * @example
 *
 * ```ts
 * props('greeting')({ greeting: 'Hello World' })
 * // => "Hello World"
 *
 * props('salutation')({ greeting: 'Hello World' })
 * // => undefined
 * ```
 */
export const props = (path: string) => <T>(data: T): T[keyof T] => {
  const keys = path.split('.');
  return keys.reduce((acc, key) => isNil(acc[key]) ? void 0 : acc[key], data);
};

/**
 * Returns the value for `path`, or `fallback` if the value is null or undefined.
 * `path` is a string of dot-separated keys.
 *
 * @example
 *
 * ```ts
 * propsOr('Hi there')('greeting')({ greeting: 'Hello World' })
 * // => "Hello World"
 *
 * propsOr('Hi there')('salutation')({ greeting: 'Hello World' })
 * // => "Hi there"
 * ```
 */
export const propsOr = <R>(fallback: R) => (path: string) => <T>(data: T): R | T[keyof T] => {
  const value = props(path)(data);
  return isNil(value) ? fallback : value;
};
