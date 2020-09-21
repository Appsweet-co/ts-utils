import { curry } from '../curry';

/**
 * Subtracts two numbers. Same as `b - a`.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#subtract)
 *
 * ```
 * import { subtract } from '@appsweet-co/utils';
 *
 * subtract(5, 9);
 * // => 4
 *
 * const sub5 = subtract(5);
 *
 * sub5(9);
 * // => 4
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * subtract(a)(b);
 * subtract(a, b);
 * ```
 */
const subtract = (a: number, b?: number) => (b) ? b - a : curry<number>(subtract, a);

export { subtract };
