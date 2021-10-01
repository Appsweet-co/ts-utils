/**
 * Returns a number between `min` and `max` values.
 *
 * Inspired by [Ionic](https://github.com/ionic-team/ionic/blob/master/core/src/utils/helpers.ts#L57).
 *
 * @example
 *
 * ```ts
 * clamp({ min: 3, max: 5, val: 1 });
 * // => 3
 *
 * clamp({ min: 3, max: 5, val: 4 });
 * // => 4
 *
 * clamp({ min: 3, max: 5, val: 12 });
 * // => 5
 * ```
 */
export const clamp = ({ min, max, val }: { min: number, max: number, val: number; }) => Math.max(min, Math.min(val, max));
