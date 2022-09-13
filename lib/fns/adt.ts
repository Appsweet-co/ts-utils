import type { Nary, Nullary, Unary } from '../types/arity';
import type { Predicate } from '../types/predicate';
import { isNil } from './predicate';

/**
 * Returns the result of `right(x)` if the predicate is true,
 * or `left(x)` if the predicate is false.
 *
 * @example
 *
 * ```ts
 * either(add(2))(sub(2))(isEven)(42)
 * // => 44
 *
 * either(add(2))(sub(2))(isEven)(43)
 * // => 41
 * ```
 */
export const either = <T, R>(right: Unary<T, R>) => (left: Unary<T, R>) => (pred: Predicate<T>) => (x: T): R => {
  return pred(x) ? right(x) : left(x);
};

/**
 * Returns the result of `just(x)`, or the fallback if `x` is null or undefined.
 *
 * @example
 *
 * ```ts
 * maybe(99)(add(2))(42)
 * // => 44
 *
 * maybe(99)(add(2))(null)
 * // => 99
 * ```
 */
export const maybe = <T, R>(just: Unary<T, R>) => (fallback: R) => (x: T): R => isNil(x) ? fallback : just(x);

/**
 * Returns the result of `ok(x)`, or the result of `err()`
 * if `x` is null or undefined.
 *
 * @example
 *
 * ```ts
 * result(add(2))(() => 99)(42)
 * // => 44
 *
 * result(add(2))(() => 99)(null)
 * // => 99
 * ```
 */
export const result = <T, R>(ok: Unary<T, R>) => (err: Nullary<R>) => (x: T): R => isNil(x) ? err() : ok(x);

/**
 * Wraps `fn` in a [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block
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
