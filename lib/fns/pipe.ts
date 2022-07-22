import { Unary } from '../types/arity';

/**
 * [Composes](https://en.wikipedia.org/wiki/Function_composition) an array of
 * exactly 2 functions from top to bottom (left to right).
 *
 * @see {@linkcode pipe3}, {@linkcode pipe4}
 *
 * @example
 *
 * ```ts
 * pipe2([
 *   x => x / 2,
 *   y => y.toString()
 * ])(42)
 * // => "21"
 * ```
 */
export const pipe2 = <T, R1, R2>(fns: [Unary<T, R1>, Unary<R1, R2>]) => (x: T): R2 => {
  const [fn1, fn2] = fns;
  return fn2(fn1(x));
};

/**
 * [Composes](https://en.wikipedia.org/wiki/Function_composition) an array of
 * exactly 3 functions from top to bottom (left to right).
 *
 * @see {@linkcode pipe2}, {@linkcode pipe4}
 *
 * @example
 *
 * ```ts
 * pipe3([
 *   x => x / 2,
 *   y => y.toString(),
 *   z => [z, z]
 * ])(42)
 * // => ["21", "21"]
 * ```
 */
export const pipe3 = <T, R1, R2, R3>(fns: [Unary<T, R1>, Unary<R1, R2>, Unary<R2, R3>]) => (x: T): R3 => {
  const [fn1, fn2, fn3] = fns;
  return fn3(fn2(fn1(x)));
};

/**
 * [Composes](https://en.wikipedia.org/wiki/Function_composition) an array of
 * exactly 4 functions from top to bottom (left to right).
 *
 * @see {@linkcode pipe2}, {@linkcode pipe3}
 *
 * @example
 *
 * ```ts
 * pipe4([
 *   x => x / 2,
 *   y => y.toString(),
 *   z => [z, z],
 *   w => w.join('/')
 * ])(42)
 * // => "21/21"
 * ```
 */
export const pipe4 = <T, R1, R2, R3, R4>(fns: [Unary<T, R1>, Unary<R1, R2>, Unary<R2, R3>, Unary<R3, R4>]) => (x: T): R4 => {
  const [fn1, fn2, fn3, fn4] = fns;
  return fn4(fn3(fn2(fn1(x))));
};
