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
 * percent(min)(max)(val);
 * percent(min)(max, val);
 * percent(min, max)(val);
 * percent(min, max, val);
 * ```
 */
const percent = (...args: [min: number, max?: number, val?: number]) =>
  (args.length >= 3) ? ratio(...args) * 100 : curry<number>(percent, ...args);

export { percent };
