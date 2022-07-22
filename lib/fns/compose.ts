import { Unary } from '../types/arity';
import { isNil } from './predicate';

/**
 * [Composes](https://en.wikipedia.org/wiki/Function_composition) an array of
 * exactly 2 functions from bottom to top (right to left).
 *
 * @see {@linkcode compose3}, {@linkcode compose4}
 *
 * @example
 *
 * ```ts
 * compose2([
 *   y => y.toString(),
 *   x => x / 2
 * ])(42)
 * // => "21"
 * ```
 */
export const compose2 = <T, R1, R2>(fns: [Unary<R1, R2>, Unary<T, R1>]) => (x: T): R2 => {
  const [fn2, fn1] = fns;
  return fn2(fn1(x));
};

/**
 * [Composes](https://en.wikipedia.org/wiki/Function_composition) an array of
 * exactly 3 functions from bottom to top (right to left).
 *
 * @see {@linkcode compose2}, {@linkcode compose4}
 *
 * @example
 *
 * ```ts
 * compose3([
 *   z => [z, z],
 *   y => y.toString(),
 *   x => x / 2
 * ])(42)
 * // => ["21", "21"]
 * ```
 */
export const compose3 = <T, R1, R2, R3>(fns: [Unary<R2, R3>, Unary<R1, R2>, Unary<T, R1>]) => (x: T): R3 => {
  const [fn3, fn2, fn1] = fns;
  return fn3(fn2(fn1(x)));
};

/**
 * [Composes](https://en.wikipedia.org/wiki/Function_composition) an array of
 * exactly 4 functions from bottom to top (right to left).
 *
 * @see {@linkcode compose2}, {@linkcode compose3}
 *
 * @example
 *
 * ```ts
 * compose4([
 *   w => w.join('/'),
 *   z => [z, z],
 *   y => y.toString(),
 *   x => x / 2
 * ])(42)
 * // => "21/21"
 * ```
 */
export const compose4 = <T, R1, R2, R3, R4>(fns: [Unary<R3, R4>, Unary<R2, R3>, Unary<R1, R2>, Unary<T, R1>]) => (x: T): R4 => {
  const [fn4, fn3, fn2, fn1] = fns;
  return fn4(fn3(fn2(fn1(x))));
};

/**
 * Same as {@linkcode compose2}, but returns the fallback if `x` is null or undefined.
 *
 * @see {@linkcode compose3Or}, {@linkcode compose4Or}
 *
 * @example
 *
 * ```ts
 * compose2Or('fallback')([y => y.toString(), x => x / 2])(42)
 * // => "21"
 *
 * compose2Or('fallback')([y => y.toString(), x => x / 2])(null)
 * // => "fallback"
 * ```
 */
export const compose2Or = <R2>(fallback: R2) => <T, R1>(fns: [Unary<R1, R2>, Unary<T, R1>]) => (x: T): R2 =>
  isNil(x) ? fallback : compose2(fns)(x);

/**
 * Same as {@linkcode compose3}, but returns the fallback if `x` is null or undefined.
 *
 * @see {@linkcode compose2Or}, {@linkcode compose4Or}
 *
 * @example
 *
 * ```ts
 * compose3Or(['fallback'])([z => [z, z], y => y.toString(), x => x / 2])(42)
 * // => ["21", "21"]
 *
 * compose3Or(['fallback'])([z => [z, z], y => y.toString(), x => x / 2])(null)
 * // => ["fallback"]
 * ```
 */
export const compose3Or = <R3>(fallback: R3) => <T, R1, R2>(fns: [Unary<R2, R3>, Unary<R1, R2>, Unary<T, R1>]) => (x: T): R3 =>
  isNil(x) ? fallback : compose3(fns)(x);

/**
 * Same as {@linkcode compose4}, but returns the fallback if `x` is null or undefined.
 *
 * @see {@linkcode compose3Or}, {@linkcode compose4Or}
 *
 * @example
 *
 * ```ts
 * compose4Or('fallback')([w => w.join('/'), z => [z, z], y => y.toString(), x => x / 2])(42)
 * // => "21/21"
 *
 * compose4Or('fallback')([w => w.join('/'), z => [z, z], y => y.toString(), x => x / 2])(null)
 * // => "fallback"
 * ```
 */
export const compose4Or = <R4>(fallback: R4) => <T, R1, R2, R3>(fns: [Unary<R3, R4>, Unary<R2, R3>, Unary<R1, R2>, Unary<T, R1>]) => (x: T): R4 =>
  isNil(x) ? fallback : compose4(fns)(x);
