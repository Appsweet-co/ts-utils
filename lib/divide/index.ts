import { curry } from '../curry';

/**
 * Divide the first argument by the second.
 * Same as `a / b`.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#divide).
 *
 * ```
 * import { divide } from '@appsweet-co/utils';
 *
 * divide(10, 2);
 * // => 5
 * ```
 */
const divide = (a: number, b: number) => a / b;

/**
 * Same as [[divide]], but curried.
 *
 * ```
 * import { divideC } from '@appsweet-co/utils';
 *
 * const divideBy10 = divideC(10);
 *
 * divideBy10(2);
 * // => 5
 * ```
 */
const divideC: (a: number) => (b: number) => number = curry(divide);

export { divide, divideC };
