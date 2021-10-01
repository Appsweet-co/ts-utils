/**
 * Returns the smalles of zero or more numbers.
 *
 * @example
 *
 * ```ts
 * min([3, 6, 9]);
 * // => 3
 *
 * min([]);
 * // => 0
 * ```
 */
export const min = (list: number[] | readonly number[]) => Math.min(...list);
