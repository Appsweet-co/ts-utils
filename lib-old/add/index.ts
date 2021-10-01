import { curry } from '../x-curry';

/**
 * Adds two numbers. Same as `a + b`.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#add)
 *
 * ```
 * import { add } from '@appsweet-co/utils';
 *
 * add(2, 3);
 * // => 5
 *
 * const add2 = add(2);
 *
 * add2(3);
 * // => 5
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * add(a)(b);
 * add(a, b);
 * ```
 */
const add = (a: number, b?: number) => (b) ? a + b : curry<number>(add, a);

export { add };
