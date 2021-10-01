/**
 * Returns the arithmetic sum of an array of numbers.
 *
 * Numbers are added left-to-right.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#add)
 *
 * @example
 *
 * ```ts
 * add([3, 6]);
 * // => 9
 *
 * add([3, 6, 9]);
 * // => 18
 *
 * add([]);
 * // => 0
 * ```
 */
export const add = (list: ReadonlyArray<number>): number => list.reduce((acc, next) => acc + next, 0);

