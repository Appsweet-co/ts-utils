import type { Nary, Nullary, Unary } from '../types/arity';
import type { Predicate } from '../types/predicate';
import { isNil } from './predicate';

/**
 * A [Sum Type](https://wiki.haskell.org/Algebraic_data_type) that
 * returns the result of `right(x)` if the predicate is true
 * or `left(x)` if the predicate is false.
 *
 * @category Sum Type
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
export const either = <T, R, L>(right: Unary<T, R>) => (left: Unary<T, L>) => (pred: Predicate<T>) => (x: T): R | L => {
  return pred(x) ? right(x) : left(x);
};

/**
 * A [Sum Type](https://wiki.haskell.org/Algebraic_data_type) that
 * returns the result of `just(x)`, or the fallback if `x` is null or undefined.
 *
 * @category Sum Type
 *
 * @example
 *
 * ```ts
 * maybe(add(2))(99)(42)
 * // => 44
 *
 * maybe(add(2))(99)(null)
 * // => 99
 * ```
 */
export const maybe = <T, R>(just: Unary<T, R>) => (fallback: R) => (x: T): R => {
  return isNil(x) ? fallback : just(x);
};

/**
 * A [Sum Type](https://wiki.haskell.org/Algebraic_data_type) that
 * returns the result of `ok(x)`, or the result of `err()`
 * if `x` is null or undefined.
 *
 * @category Sum Type
 *
 * @example
 *
 * ```ts
 * result(add(2))(() => 'anything')(42)
 * // => 44
 *
 * result(add(2))(() => 'anything')(null)
 * // => 'anything'
 * ```
 */
export const result = <T, R, E>(ok: Unary<T, R>) => (err: Nullary<E>) => (x: T): R | E => {
  return isNil(x) ? err() : ok(x);
};

/**
 * Wraps `fn` in a [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block
 * and returns the result of `fn(x)`, or returns the fallback if `fn(x)` throws an error.
 *
 * @category Sum Type
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
