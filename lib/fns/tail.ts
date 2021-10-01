import { isEmptyArray } from './is-empty-array';


/**
 * Returns all items of an array except the first item if the array has at least
 * one item. Returns the original list otherwise.
 *
 * @example
 *
 * ```ts
 * const list = [1, 2, 3, 0, 4, 5];
 * const item = tail(list);
 * // => [2, 3, 0, 4, 5]
 *
 * const empty = [];
 * const item = tail(empty);
 * // => []
 * ```
 */
export const tail = <T extends any[] | ReadonlyArray<any>>(list: T) =>
  isEmptyArray(list) ? list : list.slice(1) as T extends any[] ? Array<T[number]> : ReadonlyArray<T[number]>;
