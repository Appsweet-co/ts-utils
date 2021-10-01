import { isEmptyArray } from './is-empty-array';

/**
 * Returns the arithmetic different of an array of numbers.
 *
 * Numbers are subtracted left-to-right.
 *
 * @example
 *
 * ```ts
 * sub([3, 6]);
 * // => -3
 *
 * sub([3, 6, 9]);
 * // => -12
 *
 * sub([]);
 * // => 0
 * ```
 */
export const sub = (list: ReadonlyArray<number>) => isEmptyArray(list) ? 0 : list.reduce((acc, next) => acc - next);
