import { isEmptyArray } from './is-empty-array';

/**
 * Returns the arithmetic quotient of an array of numbers.
 *
 * Numbers are divided left-to-right.
 *
 * @example
 *
 * ```ts
 * div([9, 6]);
 * // => 1.5
 *
 * div([6, 9]);
 * // => 0.666...
 *
 * div([0, 9]);
 * // => 0
 *
 * div([9, 0]);
 * // => Infinity
 * ```
 */
export const div = (list: ReadonlyArray<number>) => isEmptyArray(list) ? 0 : list.reduce((acc, next) => acc / next);
