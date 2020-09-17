import { curry } from '../curry';
import { divide } from '../divide';
import { subtract } from '../subtract';

/**
 * Get a decimal fraction of value compared against `min` and `max` values.
 *
 * ```
 * import { ratio } from '@appsweet-co/utils';
 *
 * ratio(0, 10, 5);
 * // => 0.5
 * ```
 */
const ratio = (min: number, max: number, val: number) =>
  divide(subtract(val, min), subtract(max, min));

/**
 * Same as [[ratio]], but curried.
 *
 * ```
 * import { ratioC } from '@appsweet-co/utils';
 *
 * const scale = ratioC(0, 10);
 *
 * scale(5);
 * // => 0.5
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * ratioC(min)(max)(val);
 * ratioC(min)(max, val);
 * ratioC(min, max)(val);
 * ratioC(min, max, val);
 * ```
 */
const ratioC: (min: number) => (max: number) => (val: number) => number = curry(ratio);

export { ratio, ratioC };
