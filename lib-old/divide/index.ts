import { curry } from '../curry';

/**
 * Divide the first argument by the second. Same as `a / b`.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#divide).
 *
 * ```
 * import { divide } from '@appsweet-co/utils';
 *
 * divide(10, 2);
 * // => 5
 *
 * const div10 = divide(10);
 *
 * div10(2);
 * // => 5
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * divide(a)(b);
 * divide(a, b);
 * ```
 */
const divide = (a: number, b?: number) => (b) ? a / b : curry<number>(divide, a);

export { divide };
