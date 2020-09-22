import { curry } from '../curry';

/**
 * Returns a number between `min` and `max` values.
 *
 * Inspired by [Ionic](https://github.com/ionic-team/ionic/blob/master/core/src/utils/helpers.ts#L57).
 *
 * ```
 * import { clamp } from '@appsweet-co/utils';
 *
 * clamp(3, 5, 1);
 * => 3
 *
 * clamp(3, 5, 4);
 * // => 4
 *
 * clamp(3, 5, 12);
 * // => 5
 *
 * const range = clamp(3, 5);
 *
 * range(1);
 * // => 3
 *
 * range(4);
 * // => 4
 *
 * range(12);
 * // => 5
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * clamp(min)(max)(val);
 * clamp(min)(max, val);
 * clamp(min, max)(val);
 * clamp(min, max, val);
 * ```
 */
const clamp = (...args: [min: number, max?: number, val?: number]) => {
  const [ min, max, val ] = args;
  return (val) ? Math.max(min, Math.min(val, max)) : curry<number>(clamp, ...args);
};

export { clamp };
