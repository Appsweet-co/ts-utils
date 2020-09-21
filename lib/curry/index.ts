/**
 * Transforms a method of any arity into a curried function.
 *
 * Inspired by [William Vincent](https://wsvincent.com/javascript-currying/).
 *
 * ```
 * import { curry } from '@appsweet-co/utils';
 *
 * const add = (a, b, c) => a + b + c;
 *
 * const add9 = curry(add, 3, 6);
 *
 * add9(5)
 * // => 14
 * ```
 *
 * `curry()` accepts an optional generic return type:
 *
 * ```
 * const add9 = curry<number>(add, 3, 6);
 * ```
 */
const curry = <T = any>(fn: (...args : any[]) => any, ...args: any[]): T =>
  (args.length >= fn.length) ? fn(...args) : (...more: any[]) => curry(fn, ...args, ...more);

export { curry };
