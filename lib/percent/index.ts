import { curry } from '../curry';
import { ratio } from '../ratio';

/**
 * Get the numerical percentage of a value compared against `min` and `max` values.
 *
 * ```
 * import { percent } from '@appsweet-co/utils';
 *
 * percent(0, 10, 5);
 * // => 50
 * ```
 */
const percent = (min: number, max: number, val: number) => ratio(min, max, val) * 100;

/**
 * Same as [[percent]], but curried.
 *
 * ```
 * import { percentC } from '@appsweet-co/utils';
 *
 * const scale = percentC(0, 10);
 *
 * scale(5);
 * // => 50
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * percentC(min)(max)(val);
 * percentC(min)(max, val);
 * percentC(min, max)(val);
 * percentC(min, max, val);
 * ```
 */
const percentC: (min: number) => (max: number) => (val: number) => number = curry(percent);

export { percent, percentC };
