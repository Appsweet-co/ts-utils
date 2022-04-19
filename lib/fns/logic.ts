import { Predicate, Unary } from '../types/functional';
import { some } from './array';

/**
 * Returns true if and only if `a` and `b` are true. Same as `a && b`.
 *
 * @example
 *
 * ```ts
 * and(true)(false)
 * // => false
 * ```
*/
export const and = (a: boolean) => (b: boolean): boolean => a && b;

/**
 * Returns true if `a` or `b` is true. Same as `a || b`.
 *
 * @example
 *
 * ```ts
 * or(true)(false)
 * // => true
 * ```
 */
export const or = (a: boolean) => (b: boolean): boolean => a || b;

/**
 * Returns true if `x` and `y` are
 * [strictly equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality).
 * Same as `y === x`.
 *
 * @example
 *
 * ```ts
 * equals(42)(42)
 * // => true
 * ```
 */
export const equals = (x: unknown) => (y: unknown): boolean => x === y;

/**
 * Returns true if `x` and `y` are
 * [strictly unequal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality).
 * Same as `y !== x`.
 *
 * @example
 *
 * ```ts
 * unequals(42)(420)
 * // => true
 * ```
 */
export const unequals = (x: unknown) => (y: unknown): boolean => x !== y;

/** Returns true if `y` is less than `x`. Same as `y < x`. */
export const lt = (x: number) => (y: number): boolean => y < x;

/** Returns true if `y` is greater than `x`. Same as `y > x`. */
export const gt = (x: number) => (y: number): boolean => y > x;

/** Returns true if `y` is less than or equal to `x`. Same as `y <= x`. */
export const lte = (x: number) => (y: number): boolean => y <= x;

/** Returns true if `y` is greater than or equal to `x`. Same as `y >= x`. */
export const gte = (x: number) => (y: number): boolean => y >= x;

/**
 * Returns the result of `fn(x)` when the predicate is true, or `x` when the predicate is false.
 *
 * @example
 *
 * ```ts
 * when(isOdd)(add(2))(3)
 * // => 5
 *
 * when(isOdd)(add(2))(4)
 * // => 4
 * ```
 */
export const when = <T>(predicate: Predicate<T>) => <R>(fn: Unary<T, R>) => (x: T): T | R => predicate(x) ? fn(x) : x;

/**
 * Returns `x` when the predicate is true, or the result of `fn(x)` when the predicate is false.
 *
 * @example
 *
 * ```ts
 * unless(isOdd)(add(2))(3)
 * // => 3
 *
 * unless(isOdd)(add(2))(4)
 * // => 6
 * ```
 */
export const unless = <T>(predicate: Predicate<T>) => <R>(fn: Unary<T, R>) => (x: T): T | R => predicate(x) ? x : fn(x);

/**
 * Returns true if `x` is an even number.
 *
 * @example
 *
 * ```ts
 * isEven(3)
 * // => false
 * ```
 */
export const isEven = (x: number) => x % 2 === 0;

/**
 * Returns true if `x` is an odd number.
 *
 * @example
 *
 * ```ts
 * isOdd(3)
 * // => true
 * ```
 */
export const isOdd = (x: number) => x % 2 !== 0;

/**
 * Returns true if `x` is null or undefined.
 *
 * @example
 *
 * ```ts
 * isNil(null)
 * // => true
 *
 * isNil(undefined)
 * // => true
 * ```
 */
export const isNil = (x: unknown): boolean => x === null || x === void 0;

/**
 * Returns true if `x` is an array or string with a length of zero; or if `x` is an object with no keys.
 *
 * @example
 *
 * ```ts
 * isEmpty([])
 * // => true
 *
 * isEmpty('')
 * // => true
 *
 * isEmpty({})
 * // => true
 * ```
 */
export const isEmpty = (x: unknown): boolean => (typeof x === 'string') ? x.length === 0 : Object.keys(x).length === 0;

/** Returns true if `x` is `true`. */
export const isTrue = (x: boolean) => x === true;

/** Returns true if `x` is `false`. */
export const isFalse = (x: boolean) => x === false;

/** Returns true if `x` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). */
export const isTruthy = (x: unknown) => !!x;

/** Returns true if `x` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). */
export const isFalsy = (x: unknown) => !x;

/** Returns true if `x` is a [JavaScript primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive). */
export const isPrimitive = (x: unknown) => some(isTrue)([
  typeof x === 'bigint',
  typeof x === 'boolean',
  typeof x === 'number',
  typeof x === 'string',
  typeof x === 'symbol',
  isNil(x)
]);
