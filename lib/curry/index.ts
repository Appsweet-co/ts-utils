/**
 * Transforms a method of any arity into a curried function.
 *
 * Inspired by [William Vincent](https://wsvincent.com/javascript-currying/).
 *
 * ```
 * import { curry } from '@appsweet-co/utils';
 *
 * const add = (a, b) => a + b;
 * const add6 = curry(add, 6);
 *
 * add6(5)
 * // => 11
 * ```
 */
const curry = (fn: (...args : unknown[]) => unknown, ...args: unknown[]) =>
  (args.length >= fn.length) ? fn(...args) : (...more: unknown[]) => curry(fn, ...args, ...more);

export { curry };
