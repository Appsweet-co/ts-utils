/**
 * Returns the largest of zero or more numbers.
 *
 * @example
 *
 * ```ts
 * max([3, 6, 9]);
 * // => 9
 *
 * max([]);
 * // => 0
 * ```
 */
export const max = (list: ReadonlyArray<number>) => Math.max(...list);
