import { Nary } from '../types/arity';

/**
 * Wraps `fn` in a [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
 * and returns the result of `fn(x)`, or returns the fallback if `fn(x)` throws an error.
 *
 * @example
 *
 * ```ts
 * throwable(JSON.parse)('fallback')('["Good","JSON"]')
 * // => ['Good', 'JSON']
 *
 * throwable(JSON.parse)('fallback')('[Bad, JSON]')
 * // => 'fallback'
 * ```
 */
export const throwable = <T, R>(fn: Nary<T, R>) => (fallback: R) => (x: T): R => {
  // eslint-disable-next-line functional/no-try-statement
  try {
    return fn(x);
  } catch (_) {
    return fallback;
  }
};
