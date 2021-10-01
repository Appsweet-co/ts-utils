/**
 * Transforms a method of any arity into a curried function.
 *
 * Inspired by [William Vincent](https://wsvincent.com/javascript-currying/).
 *
 * @example
 *
 * ```ts
 * const add = (a, b, c) => a + b + c;
 *
 * const add9 = curry<number>(add, 3, 6);
 *
 * add9(5)
 * // => 14
 * ```
 */
export const curry = <T>(fn: (...args: any[]) => any, ...inits: any[]): T =>
  (inits.length >= fn.length) ? fn(...inits) : (...more: any[]) => curry(fn, ...inits, ...more);
