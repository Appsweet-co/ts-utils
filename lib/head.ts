import { isEmptyArray } from './is-empty-array';

/**
 * Returns the first item of an array if the array has at least one item. Returns
 * the original list otherwise.
 *
 * @example
 *
 * ```ts
 * const list = [1, 2, 3, 0, 4, 5];
 * const item = head(list);
 * // => 1
 *
 * const empty = [];
 * const item = head(empty);
 * // => []
 * ```
 */
export const head = <T extends any[] | ReadonlyArray<any>>(list: T): T[number] => isEmptyArray(list) ? list : list[0];
