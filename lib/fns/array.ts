import { Unary } from '../types/arity';
import { Reducer } from '../types/functional';
import { Predicate } from '../types/predicate';
import { maybe } from './adt';
import { isNil } from './predicate';

/**
 * Returns the first item in an array, or the fallback if `list` is null
 * or undefined.
 *
 * @example
 *
 * ```ts
 * head(99)([3, 6, 9])
 * // => 3
 *
 * head(99)(undefined)
 * // => 99
 * ```
 */
export const head = <T>(fallback: T) => (list: T[]): T => maybe(fallback)((list: T[]) => list[0])(list);

/**
 * Returns all but the first item in an array, or the fallback `list` is null or undefined.
 *
 * @example
 *
 * ```ts
 * tail([])([3, 6, 9])
 * // => [6, 9]
 *
 * tail([])(undefined)
 * // => []
 * ```
 */
export const tail = <T>(fallback: T[]) => (list: T[]): T[] => maybe(fallback)((list: T[]) => list.slice(1))(list);

/**
 * Returns the last item in an array, or the fallback if `list` is null or undefined.
 *
 * @example
 *
 * ```ts
 * last(99)([3, 6, 9])
 * // => 9
 *
 * last(99)(undefined)
 * // => 99
 * ```
 */
export const last = <T>(fallback: T) => (list: T[]): T => maybe(fallback)((list: T[]) => list[list.length - 1])(list);

/**
 * Returns all but the last item in an array, or the fallback `list` is null or undefined.
 *
 * @example
 *
 * ```ts
 * init([])([3, 6, 9])
 * // => [3, 6]
 *
 * init([])(undefined)
 * // => []
 * ```
 */
export const init = <T>(fallback: T[]) => (list: T[]): T[] => maybe(fallback)((list: T[]) => list.slice(0, -1))(list);

// /**
//  * Returns all items in an array that meet the predicate. Same as `list.filter(fn)`.
//  *
//  * @see {@linkcode filterOr}
//  *
//  * @example
//  *
//  * ```ts
//  * filter(isOdd)([3, 6, 9])
//  * // => [3, 9]
//  * ```
//  */
// export const filter = <T>;

/**
 * Returns all items in an array that meet the predicate, or the fallback
 * if `list` is null or undefined.
 *
 * @example
 *
 * ```ts
 * filter([])(isOdd)([3, 6, 9])
 * // => [3, 9]
 *
 * filter([])(isOdd)(undefined)
 * // => []
 * ```
 */
export const filter = <T>(fallback: T[]) => (fn: Predicate<T>) => (list: T[]): T[] =>
  maybe(fallback)((list: T[]) => list.filter(fn))(list);

/**
 * Returns a mapped array of items, or the fallback if `list` is null or undefined.
 *
 * @example
 *
 * ```ts
 * map([])(add(2))([3, 6, 9])
 * // => [5, 8, 11]
 *
 * map([])(add(2))(undefined)
 * // => []
 * ```
 */
export const map = <R>(fallback: R[]) => <T>(fn: Unary<T, R>) => (list: T[]): R[] =>
  maybe(fallback)((list: T[]) => list.map(fn))(list);

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
export const every = <T>(fn: Predicate<T>) => (list: T[]): boolean => list.every(fn);

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
export const some = <T>(fn: Predicate<T>) => (list: T[]): boolean => list.some(fn);

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
export const none = <T>(fn: Predicate<T>) => (list: T[]): boolean => !list.every(fn);

/**
 * Joins items in an array using `separator`, or returns the fallback if `list` is null or undefined.
 *
 * @example
 *
 * ```ts
 * join('fallback')(',')([3, 6, 9])
 * // => "3,6,9"
 *
 * join('fallback')(',')(undefined)
 * // => "fallback"
 * ```
 */
export const join = (fallback: string) => (separator: string) => <T>(list: T[]): string =>
  maybe(fallback)((list: T[]) => list.join(separator))(list);

/**
 * Splits a string using `separator`, or returns the fallback if `x` is null or undefined.
 *
 * @see {@linkcode split}
 *
 * @example
 *
 * ```ts
 * split(["fallback"])(',')('3,6,9')
 * // => ["3", "6", "9"]
 *
 * split(["fallback"])(',')(undefined)
 * // => ["fallback"]
 * ```
 */
export const split = (fallback: string[]) => (separator: string) => (x: string): string[] =>
  maybe(fallback)((x: string) => x.split(separator))(x);

/**
 * Adds an item to the end of an array, or returns a new array if `list` is null or undefined.
 *
 * Same as `[...list, x]`.
 *
 * @example
 *
 * ```ts
 * append(12)([3, 6, 9])
 * // => [3, 6, 9, 12]
 *
 * append(12)(undefined)
 * // => [12]
 * ```
 */
export const append = <T>(x: T) => <U>(list: U[]): Array<T | U> => isNil(list) ? [x] : [...list, x];

/**
 * Adds a new item to the start of an array, or returns a new array if `list` is null or undefined.
 *
 * Same as `[x, ...list]`.
 *
 * @example
 *
 * ```ts
 * prepend(0)([3, 6, 9])
 * // => [0, 3, 6, 9]
 *
 * prepend(0)(undefined)
 * // => [0]
 * ```
 */
export const prepend = <T>(x: T) => <U>(list: U[]): Array<T | U> => isNil(list) ? [x] : [x, ...list];

/**
 * Returns the first (or last) `count` of items from an array, or the fallback
 * if `list` is null or undefined.
 *
 * @example
 *
 * ```ts
 * take([])(4)([1, 2, 3, 4, 5, 6]);
 * // => [1, 2, 3, 4]
 *
 * take([])(4)(undefined);
 * // => []
 * ```
 */
export const take = <T>(fallback: T[]) => (count: number) => (list: T[]): T[] =>
  maybe(fallback)((list: T[]) => (count === 0) ? [] : (count < 0) ? list.slice(count) : list.slice(0, count))(list);

/**
 * Returns all but the first (or last) `count` of items from an array, or the
 * fallback if `list` is null or undefined.
 *
 * @example
 *
 * ```ts
 * drop([])(4)([1, 2, 3, 4, 5, 6]);
 * // => [5, 6]
 *
 * drop([])(4)(undefined);
 * // => []
 * ```
 */
export const drop = <T>(fallback: T[]) => (count: number) => (list: T[]): T[] =>
  maybe(fallback)((list: T[]) => (count === 0) ? list : (count < 0) ? list.slice(0, count) : list.slice(count))(list);

/**
 * Returns the accumulated result of calling `fn` on each item in an array,
 * or the fallback if `list` is null or undefined.
 *
 * @example
 *
 * ```ts
 * reduce(99)((acc, next) => acc + next)([3, 6, 9])
 * // => 18
 *
 * reduce(99)((acc, next) => acc + next)(undefined)
 * // => 99
 * ```
 */
export const reduce = <T>(fallback: T) => (fn: Reducer<T>) => (list: T[]): T =>
  maybe(fallback)((list: T[]) => list.reduce(fn))(list);
