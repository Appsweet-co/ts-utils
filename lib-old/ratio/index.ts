import { divide } from '../divide';
import { subtract } from '../subtract';
import { curry } from '../x-curry';

/**
 * Get the decimal fraction of a value compared against `min` and `max` values.
 *
 * ```
 * import { ratio } from '@appsweet-co/utils';
 *
 * ratio(0, 10, 5);
 * // => 0.5
 *
 * const range = ratio(0, 10);
 *
 * range(5);
 * // => 0.5
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * ratio(min)(max)(val);
 * ratio(min)(max, val);
 * ratio(min, max)(val);
 * ratio(min, max, val);
 * ```
 */
const ratio = (...args: [min: number, max?: number, val?: number]) =>
  (args.length >= 3) ? divide(subtract(args[0], args[2]), subtract(args[0], args[1])) : curry<number>(ratio, ...args);

export { ratio };
