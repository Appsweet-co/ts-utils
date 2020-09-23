
/**
 * Negates a value or an array of values.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#negate).
 *
 * ```
 * import { neg } from '@appsweet-co/utils';
 *
 * neg(9);
 * // => -9
 *
 * neg([9, -13]);
 * // => [-9, 13]
 * ```
 */
const neg = (arg: number | number[]) => (Array.isArray(arg)) ? arg.map(n => -n) : -arg;

export { neg };
