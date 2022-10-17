import { Unary } from '../types/arity';
import { isNil } from './predicate';

/**
 * [Compose](https://en.wikipedia.org/wiki/Function_composition) an array of
 * exactly 2 functions from bottom to top (right to left).
 *
 * Returns the `fallback` if `x` is null or undefined.
 *
 * @see {@linkcode compose3}, {@linkcode compose4}
 *
 * @example
 *
 * ```ts
 * compose2('fallback')([y => y.toString(), x => x / 2])(42)
 * // => "21"
 *
 * compose2('fallback')([y => y.toString(), x => x / 2])(undefined)
 * // => "fallback"
 * ```
 */
export const compose2 = <R2>(fallback: R2) => <T, R1>(fns: [Unary<R1, R2>, Unary<T, R1>]) => (x: T): R2 => {
  return isNil(x) ? fallback : (() => {
    const [fn2, fn1] = fns;
    return fn2(fn1(x));
  })();
};


/**
 * [Compose](https://en.wikipedia.org/wiki/Function_composition) an array of
 * exactly 3 functions from bottom to top (right to left).
 *
 * Returns the `fallback` if `x` is null or undefined.
 *
 * @see {@linkcode compose2}, {@linkcode compose4}
 *
 * @example
 *
 * ```ts
 * compose3(['fallback'])([z => [z, z], y => y.toString(), x => x / 2])(42)
 * // => ["21", "21"]
 *
 * compose3(['fallback'])([z => [z, z], y => y.toString(), x => x / 2])(null)
 * // => ["fallback"]
 * ```
 */
export const compose3 = <R3>(fallback: R3) => <T, R1, R2>(fns: [Unary<R2, R3>, Unary<R1, R2>, Unary<T, R1>]) => (x: T): R3 => {
  return isNil(x) ? fallback : (() => {
    const [fn3, fn2, fn1] = fns;
    return fn3(fn2(fn1(x)));
  })();
};


/**
 * [Compose](https://en.wikipedia.org/wiki/Function_composition) an array of
 * exactly 4 functions from bottom to top (right to left).
 *
 * Returns the `fallback` if `x` is null or undefined.
 *
 * @see {@linkcode compose2}, {@linkcode compose3}
 *
 * @example
 *
 * ```ts
 * compose4('fallback')([w => w.join('/'), z => [z, z], y => y.toString(), x => x / 2])(42)
 * // => "21/21"
 *
 * compose4('fallback')([w => w.join('/'), z => [z, z], y => y.toString(), x => x / 2])(undefined)
 * // => "fallback"
 * ```
 */
export const compose4 = <R4>(fallback: R4) => <T, R1, R2, R3>(fns: [Unary<R3, R4>, Unary<R2, R3>, Unary<R1, R2>, Unary<T, R1>]) => (x: T): R4 => {
  return isNil(x) ? fallback : (() => {
    const [fn4, fn3, fn2, fn1] = fns;
    return fn4(fn3(fn2(fn1(x))));
  })();
};
