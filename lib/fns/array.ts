import type { Unary } from '../types/arity';
import type { Reducer } from '../types/functional';
import type { Predicate } from '../types/predicate';
import { maybe } from './adt';
import { isNil } from './predicate';

/**
 * Returns the first item in an array. Same as `list[0]`.
 *
 * @category Arrays
 * @see {@linkcode headOr}
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
 * Returns the first item in an array, or the fallback if `list` is null
 * or undefined.
 *
 * @category Arrays
 * @see {@linkcode head}
 *
 * @example
 *
 * ```ts
 * headOr(99)([3, 6, 9])
 * // => 3
 *
 * headOr(99)(null)
 * // => 99
 * ```
 */
export const headOr = <T>(fallback: T) => (list: T[]): T => maybe(head)(fallback)(list);

/**
 * Returns all but the first item in an array. Same as `list.slice(1)`.
 *
 * @category Arrays
 * @see {@linkcode tailOr}
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
 * Returns all but the first item in an array, or the fallback `list` is null or undefined.
 *
 * @category Arrays
 * @see {@linkcode tail}
 *
 * @example
 *
 * ```ts
 * tailOr([])([3, 6, 9])
 * // => [6, 9]
 *
 * tailOr([])(null)
 * // => []
 * ```
 */
export const tailOr = <T>(fallback: T[]) => (list: T[]): T[] => maybe(tail)(fallback)(list);

/**
 * Returns the last item in an array. Same as `list[list.length - 1]`.
 *
 * @category Arrays
 * @see {@linkcode lastOr}
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
 * Returns the last item in an array, or the fallback if `list` is null or undefined.
 *
 * @category Arrays
 * @see {@linkcode last}
 *
 * @example
 *
 * ```ts
 * lastOr(99)([3, 6, 9])
 * // => 9
 *
 * lastOr(99)(null)
 * // => 99
 * ```
 */
export const lastOr = <T>(fallback: T) => (list: T[]): T => maybe(last)(fallback)(list);

/**
 * Returns all but the last item in an array. Same as `list.slice(0, -1)`.
 *
 * @category Arrays
 * @see {@linkcode initOr}
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
 * Returns all but the last item in an array, or the fallback `list` is null or undefined.
 *
 * @category Arrays
 * @see {@linkcode init}
 *
 * @example
 *
 * ```ts
 * initOr([])([3, 6, 9])
 * // => [3, 6]
 *
 * initOr([])(null)
 * // => []
 * ```
 */
export const initOr = <T>(fallback: T[]) => (list: T[]): T[] => maybe(init)(fallback)(list);

/**
 * Returns all items in an array that meet the predicate. Same as `list.filter(fn)`.
 *
 * @category Arrays
 * @see {@linkcode filterOr}
 *
 * @example
 *
 * ```ts
 * filter(isOdd)([3, 6, 9])
 * // => [3, 9]
 * ```
 */
export const filter = <T>(fn: Predicate<T>) => (list: T[]): T[] => list.filter(fn);

/**
 * Returns all items in an array that meet the predicate, or the fallback
 * if `list` is null or undefined.
 *
 * @category Arrays
 * @see {@linkcode filter}
 *
 * @example
 *
 * ```ts
 * filterOr([])(isOdd)([3, 6, 9])
 * // => [3, 9]
 *
 * filterOr([])(isOdd)(null)
 * // => []
 * ```
 */
export const filterOr = <T>(fallback: T[]) => (fn: Predicate<T>) => (list: T[]): T[] =>
  maybe(filter(fn))(fallback)(list);

/**
 * Returns a mapped array of items. Same as `list.map(fn)`.
 *
 * @category Arrays
 * @see {@linkcode mapOr}
 *
 * @example
 *
 * ```ts
 * map(add(2))([3, 6, 9])
 * // => [5, 8, 11]
 * ```
 */
export const map = <T, R>(fn: Unary<T, R>) => (list: T[]): R[] => list.map(fn);

/**
 * Returns a mapped array of items, or the fallback if `list` is null or undefined.
 *
 * @category Arrays
 * @see {@linkcode map}
 *
 * @example
 *
 * ```ts
 * mapOr([])(add(2))([3, 6, 9])
 * // => [5, 8, 11]
 *
 * mapOr([])(add(2))(null)
 * // => []
 * ```
 */
export const mapOr = <R>(fallback: R[]) => <T>(fn: Unary<T, R>) => (list: T[]): R[] =>
  maybe(map(fn))(fallback)(list);

/**
 * Returns true if the predicate returns true for every item in an array. Same as `list.every(predicate)`.
 *
 * @category Arrays
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
 * @category Arrays
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
 * @category Arrays
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
 * Joins items in an array using `separator`. Same as `list.join(separator)`.
 *
 * @category Arrays
 * @see {@linkcode joinOr}
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
 * Joins items in an array using `separator`, or the fallback if `list` is null or undefined.
 *
 * @category Arrays
 * @see {@linkcode join}
 *
 * @example
 *
 * ```ts
 * joinOr('fallback')(',')([3, 6, 9])
 * // => "3,6,9"
 *
 * joinOr('fallback')(',')(null)
 * // => "fallback"
 * ```
 */
export const joinOr = (fallback: string) => (separator: string) => <T>(list: T[]): string =>
  maybe(join(separator))(fallback)(list);

/**
 * Splits a string using `separator`. Same as `x.split(separator)`.
 *
 * @category Arrays
 * @see {@linkcode splitOr}
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
 * Splits a string using `separator`, or returns the fallback if `x` is null or undefined.
 *
 * @category Arrays
 * @see {@linkcode split}
 *
 * @example
 *
 * ```ts
 * splitOr(["fallback"])(',')('3,6,9')
 * // => ["3", "6", "9"]
 *
 * splitOr(["fallback"])(',')(null)
 * // => ["fallback"]
 * ```
 */
export const splitOr = (fallback: string[]) => (separator: string) => (x: string): string[] =>
  maybe(split(separator))(fallback)(x);

/**
 * Adds an item to the end of an array, or returns a new array if `list` is null or undefined.
 *
 * Same as `[...list, x]`.
 *
 * @category Arrays
 *
 * @example
 *
 * ```ts
 * append(12)([3, 6, 9])
 * // => [3, 6, 9, 12]
 *
 * append(12)(null)
 * // => [12]
 * ```
 */
export const append = <T>(x: T) => <U>(list: U[]): Array<T | U> => isNil(list) ? [x] : [...list, x];

/**
 * Adds a new item to the start of an array, or returns a new array if `list` is null or undefined.
 *
 * Same as `[x, ...list]`.
 *
 * @category Arrays
 *
 * @example
 *
 * ```ts
 * prepend(0)([3, 6, 9])
 * // => [0, 3, 6, 9]
 *
 * prepend(0)(null)
 * // => [0]
 * ```
 */
export const prepend = <T>(x: T) => <U>(list: U[]): Array<T | U> => isNil(list) ? [x] : [x, ...list];

/**
 * Returns the first (or last) `count` of items from an array.
 *
 * @category Arrays
 * @see {@linkcode takeOr}
 *
 * @example
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
 * Returns the first (or last) `count` of items from an array, or the fallback
 * if `list` is null or undefined.
 *
 * @category Arrays
 * @see {@linkcode take}
 *
 * @example
 *
 * ```ts
 * takeOr([])(4)([1, 2, 3, 4, 5, 6]);
 * // => [1, 2, 3, 4]
 *
 * takeOr([])(4)(null);
 * // => []
 * ```
 */
export const takeOr = <T>(fallback: T[]) => (count: number) => (list: T[]): T[] => maybe(take(count))(fallback)(list);

/**
 * Returns all but the first (or last) `count` of items from an array.
 *
 * @category Arrays
 * @see {@linkcode dropOr}
 *
 * @example
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

/**
 * Returns all but the first (or last) `count` of items from an array, or the
 * fallback if `list` is null or undefined.
 *
 * @category Arrays
 * @see {@linkcode drop}
 *
 * @example
 *
 * ```ts
 * dropOr([])(4)([1, 2, 3, 4, 5, 6]);
 * // => [5, 6]
 *
 * dropOr([])(4)(null);
 * // => []
 * ```
 */
export const dropOr = <T>(fallback: T[]) => (count: number) => (list: T[]): T[] => maybe(drop(count))(fallback)(list);

/**
 * Returns the accumulated result of calling `fn` on each item in an array.
 * Same as `list.reduce(fn)`.
 *
 * @category Arrays
 * @see {@linkcode reduceOr}
 *
 * @example
 *
 * ```ts
 * reduce((acc, next) => acc + next)([3, 6, 9])
 * // => 18
 * ```
 */
export const reduce = <T>(fn: Reducer<T>) => (list: T[]): T => list.reduce(fn);

/**
 * Returns the accumulated result of calling `fn` on each item in an array,
 * or the fallback if `list` is null or undefined.
 *
 * @category Arrays
 * @see {@linkcode reduce}
 *
 * @example
 *
 * ```ts
 * reduceOr(99)((acc, next) => acc + next)([3, 6, 9])
 * // => 18
 *
 * reduceOr(99)((acc, next) => acc + next)(null)
 * // => 99
 * ```
 */
export const reduceOr = <T>(fallback: T) => (fn: Reducer<T>) => (list: T[]): T =>
  isNil(list) ? fallback : reduce(fn)(list);
