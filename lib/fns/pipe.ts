import { Unary } from '../types/arity';
import { isNil } from './predicate';

/**
 * [Compose](https://en.wikipedia.org/wiki/Function_composition) an array of
 * exactly 2 functions from top to bottom (left to right).
 *
 * Returns the `fallback` if `x` is null or undefined.
 *
 * @see {@linkcode pipe3}, {@linkcode pipe4}
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
export const pipe2 = <C>(fallback: C) => <A, B>(fns: [Unary<A, B>, Unary<B, C>]) => (x: A): C => {
  return isNil(x) ? fallback : (() => {
    const [ab, bc] = fns;
    return bc(ab(x));
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
export const pipe3 = <D>(fallback: D) => <A, B, C>(fns: [Unary<A, B>, Unary<B, C>, Unary<C, D>]) => (x: A): D => {
  return isNil(x) ? fallback : (() => {
    const [ab, bc, cd] = fns;
    return cd(bc(ab(x)));
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
export const pipe4 = <E>(fallback: E) => <A, B, C, D>(fns: [Unary<A, B>, Unary<B, C>, Unary<C, D>, Unary<D, E>]) => (x: A): E => {
  return isNil(x) ? fallback : (() => {
    const [ab, bc, cd, de] = fns;
    return de(cd(bc(ab(x))));
  })();
};
