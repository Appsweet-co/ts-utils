import { curry } from '../curry';

/**
 * Subtract the second argument from the first.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#subtract).
 *
 * ```
 * import { subtract } from '@appsweet-co/utils';
 *
 * subtract(5, 3);
 * // => 2
 * ```
 */
const subtract = (a: number, b: number) => a - b;

/**
 * Same as `subtract()`, but curried.
 *
 * ```
 * import { subtractC } from '@appsweet-co/utils';
 *
 * const subtract3 = subtractC(3);
 *
 * subtract3(5);
 * // => 2
 * ```
 */
const subtractC: (a: number) => (b: number) => number = curry(subtract);

export { subtract, subtractC };
