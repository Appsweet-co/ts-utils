/**
 * Binds arguments to any function. Same as `fn.bind(null, ...args)`.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#partial)
 *
 * ```
 * import { partial } from '@appsweet-co/utils';
 *
 * const add = (a, b) => a + b;
 *
 * const add2 = partial(add, 2);
 *
 * add2(3);
 * // => 5
 * ```
 */
const partial = (fn: (...args: unknown[]) => unknown, ...args: unknown[]): unknown => fn.bind(null, ...args);

export { partial };
