import { Unary } from '../types/arity';
import { isNil } from './predicate';

/**
 * [Compose](https://en.wikipedia.org/wiki/Function_composition) an array of
 * exactly 2 functions from top to bottom (left to right).
 *
 * Returns the `fallback` if `x` is null or undefined.
 *
 * @see {@linkcode pipe3}, {@linkcode _pipe4}
 *
 * @example
 *
 * ```ts
 * pipe2('fallback')([x => x / 2, y => y.toString()])(42)
 * // => "21"
 *
 * pipe2('fallback')([x => x / 2, y => y.toString()])(undefined)
 * // => "fallback"
 * ```
 */
export const pipe2 = <R2>(fallback: R2) => <T, R1>(fns: [Unary<T, R1>, Unary<R1, R2>]) => (x: T): R2 => {
  return isNil(x) ? fallback : (() => {
    const [fn1, fn2] = fns;
    return fn2(fn1(x));
  })();
};

/**
 * [Compose](https://en.wikipedia.org/wiki/Function_composition) an array of
 * exactly 3 functions from top to bottom (left to right).
 *
 * Returns the `fallback` if `x` is null or undefined.
 *
 * @see {@linkcode pipe2}, {@linkcode pipe4}
 *
 * @example
 *
 * ```ts
 * pipe3(['fallback'])([x => x / 2, y => y.toString(), z => [z, z]])(42)
 * // => ["21", "21"]
 *
 * pipe3(['fallback'])([x => x / 2, y => y.toString(), z => [z, z]])(undefined)
 * // => ["fallback"]
 * ```
 */
export const pipe3 = <R3>(fallback: R3) => <T, R1, R2>(fns: [Unary<T, R1>, Unary<R1, R2>, Unary<R2, R3>]) => (x: T): R3 => {
  return isNil(x) ? fallback : (() => {
    const [fn1, fn2, fn3] = fns;
    return fn3(fn2(fn1(x)));
  })();
};

/**
 * [Compose](https://en.wikipedia.org/wiki/Function_composition) an array of
 * exactly 4 functions from top to bottom (left to right).
 *
 * Returns the `fallback` if `x` is null or undefined.
 *
 * @see {@linkcode pipe2}, {@linkcode pipe3}
 *
 * @example
 *
 * ```ts
 * pipe4('fallback')([x => x / 2, y => y.toString(), z => [z, z], w => w.join('/')])(42)
 * // => "21/21"
 *
 * pipe4('fallback')([x => x / 2, y => y.toString(), z => [z, z], w => w.join('/')])(undefined)
 * // => "fallback"
 * ```
 */
export const pipe4 = <R4>(fallback: R4) => <T, R1, R2, R3>(fns: [Unary<T, R1>, Unary<R1, R2>, Unary<R2, R3>, Unary<R3, R4>]) => (x: T): R4 => {
  return isNil(x) ? fallback : (() => {
    const [fn1, fn2, fn3, fn4] = fns;
    return fn4(fn3(fn2(fn1(x))));
  })();
};
