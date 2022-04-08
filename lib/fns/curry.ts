/**
 * Transforms a method of any arity into a curried function.
 *
 * @example
 *
 * ```ts
 * const add = (a, b, c) => a + b + c;
 *
 * const add9 = curry<number>(add, 3, 6);
 *
 * add9(5);
 * // => 14
 * ```
 */
export const curry = <T>(fn: (...args: any[]) => any) => (args: any[]): T =>
  (args.length >= fn.length) ? fn(...args) : (...more: any[]) => curry(fn)([...args, ...more]);
