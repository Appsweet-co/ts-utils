import { Unary } from '../types/functional';

/**
 * Returns the first item in an array. Same as `list[0]`.
 *
 * @example
 *
 * ```ts
 * head([3, 6, 9])
 * // => 3
 * ```
 */
export const head = <T>(list: T[]): T => list[0];

/**
 * Returns all but the first item in an array. Same as `list.slice(1)`.
 *
 * @example
 *
 * ```ts
 * tail([3, 6, 9])
 * // => [6, 9]
 * ```
 */
export const tail = <T>(list: T[]): T[] => list.slice(1);

/**
 * Returns the last item in an array. Same as `list[list.length - 1]`.
 *
 * @example
 *
 * ```ts
 * last([3, 6, 9])
 * // => 9
 * ```
 */
export const last = <T>(list: T[]): T => list[list.length - 1];

/**
 * Returns all but the last item in an array. Same as `list.slice(0, -1)`.
 *
 * @example
 *
 * ```ts
 * init([3, 6, 9])
 * // => [3, 6]
 * ```
 */
export const init = <T>(list: T[]): T[] => list.slice(0, -1);

/**
 * Returns a filtered array of items. Same as `list.filter(predicate)`.
 *
 * @example
 *
 * ```ts
 * filter(isOdd)([3, 6, 9])
 * // => [3, 9]
 * ```
 */
export const filter = <T>(predicate: Unary<T, boolean>) => (list: T[]): T[] => list.filter(predicate);

/**
 * Returns a mapped array of items. Same as `list.map(fn)`.
 *
 * @example
 *
 * ```ts
 * map(add(2))([3, 6, 9])
 * // => [5, 8, 11]
 * ```
 */
export const map = <T, U>(fn: (x: T) => U) => (list: T[]): U[] => list.map(fn);

/**
 * Returns true if the predicate returns true for every item in an array. Same as `list.every(predicate)`.
 *
 * @example
 *
 * ```ts
 * every(isEven)([3, 6, 9])
 * // => false
 * ```
 */
export const every = <T>(predicate: (x: T) => boolean) => (list: T[]): boolean => list.every(predicate);

/**
 * Returns true if the predicate returns true for some items in an array. Same as `list.some(predicate)`.
 *
 * @example
 *
 * ```ts
 * some(isEven)([3, 6, 9])
 * // => false
 * ```
 */
export const some = <T>(predicate: (x: T) => boolean) => (list: T[]): boolean => list.some(predicate);

/**
 * Returns true if the predicate returns false for every item in an array. Same as `!list.every(predicate)`.
 *
 * @example
 *
 * ```ts
 * none(isEven)([3, 6, 9])
 * // => false
 * ```
 */
export const none = <T>(predicate: (x: T) => boolean) => (list: T[]): boolean => !list.every(predicate);

/**
 * Joins items in an array using `separator`. Same as `list.join(separator)`.
 *
 * @example
 *
 * ```ts
 * join(',')([3, 6, 9])
 * // => "3,6,9"
 * ```
 */
export const join = (separator: string) => <T>(list: T[]): string => list.join(separator);

/**
 * Splits a string using `separator`. Same as `x.split(separator)`.
 *
 * @example
 *
 * ```ts
 * split(',')('3,6,9')
 * // => [3, 6, 9]
 * ```
 */
export const split = (separator: string) => (x: string): string[] => x.split(separator);

/**
 * Adds a new item to the end of an array. Same as `[...list, x]`.
 *
 * @example
 *
 * ```ts
 * append(12)([3, 6, 9])
 * // => [3, 6, 9, 12]
 * ```
 */
export const append = <T>(x: T) => <U>(list: U[]): Array<T | U> => [...list, x];

/**
 * Adds a new item to the start of an array. Same as `[x, ...list]`.
 *
 * @example
 *
 * ```ts
 * prepend(0)([3, 6, 9])
 * // => [0, 3, 6, 9]
 * ```
 */
export const prepend = <T>(x: T) => <U>(list: U[]): Array<T | U> => [x, ...list];

/**
 * Returns the first (or last) `count` of items from an array.
 *
 * ```ts
 * take(0)([1, 2, 3, 4, 5, 6]);
 * // => []
 *
 * take(4)([1, 2, 3, 4, 5, 6]);
 * // => [1, 2, 3, 4]
 *
 * take(-2)([1, 2, 3, 4, 5, 6]);
 * // => [5, 6]
 * ```
 */
export const take = (count: number) => <T>(list: T[]): T[] =>
  (count === 0) ? [] : (count < 0) ? list.slice(count) : list.slice(0, count);

/**
* Returns all but the first (or last) `count` of items from an array.
*
* ```ts
* drop(0)([1, 2, 3, 4, 5, 6]);
* // => [1, 2, 3, 4, 5, 6]
*
* drop(4)([1, 2, 3, 4, 5, 6]);
* // => [5, 6]
*
* drop(-2)([1, 2, 3, 4, 5, 6]);
* // => [1, 2, 3, 4]
* ```
*/
export const drop = (count: number) => <T>(list: T[]): T[] =>
  (count === 0) ? list : (count < 0) ? list.slice(0, count) : list.slice(count);
