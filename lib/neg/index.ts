
/**
 * Negates a value.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#negate).
 *
 * ```
 * import { neg } from '@appsweet-co/utils';
 *
 * neg(9);
 * // => -9
 *
 * neg(-13);
 * // => 13
 * ```
 */
const neg = (n: number) => -n;

export { neg };
