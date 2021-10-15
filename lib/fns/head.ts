import { isEmptyArray } from './is-empty-array';

/**
 * Returns the first item of a list if the array has at least one item. Returns
 * the original list otherwise.
 *
 * @example
 *
 * ```ts
 * head([1, 2, 3, 0, 4, 5]);
 * // => 1
 *
 * head([]);
 * // => []
 * ```
 */
export const head = <T extends ReadonlyArray<unknown>>(list: T): T[number] => isEmptyArray(list) ? list : list[0];
