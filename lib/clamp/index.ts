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
 * ```
 */
const clamp = (min: number, max: number, val: number): number =>
  Math.max(min, Math.min(val, max));

/**
 * Same as [[clamp]], but curried.
 *
 * ```
 * import { clampC } from '@appsweet-co/utils';
 *
 * const range = clampC(3, 5);
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
 * clampC(min)(max)(val);
 * clampC(min)(max, val);
 * clampC(min, max)(val);
 * clampC(min, max, val);
 * ```
 */
const clampC: (min: number) => (max: number) => (val: number) => number = curry(clamp);

export { clamp, clampC };
