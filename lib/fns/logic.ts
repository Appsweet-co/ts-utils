import type { Unary } from '../types/arity';
import type { Predicate } from '../types/predicate';

/**
 * Returns true if `x` and `y` are true. Same as `y && x`.
 *
 * @example
 *
 * ```ts
 * and(true)(false)
 * // => false
 * ```
 */
export const and = (x: boolean) => (y: boolean): boolean => y && x;

/**
 * Returns true if `x` or `y` is true. Same as `y || x`.
 *
 * @example
 *
 * ```ts
 * or(true)(false)
 * // => true
 * ```
 */
export const or = (x: boolean) => (y: boolean): boolean => y || x;

/**
 * Returns true if `a` or `b` is excessively true.
 *
 * @example
 *
 * ```ts
 * xor(true)(true)
 * // => false
 *
 * xor(false)(false)
 * // => false
 *
 * xor(true)(false)
 * // => true
 * ```
 */
export const xor = (x: boolean) => (y: boolean): boolean => or(and(x === true)(y === false))(and(x === false)(y === true));

/**
 * Returns true if `fa(x)` and `fb(x)` are true. Same as `fb(x) && fa(x)`.
 *
 * @example
 *
 * ```ts
 * both(isEven)(x => x === 2)(2)
 * // => true
 *
 * both(isEven)(x => x === 2)(4)
 * // => false
 * ```
 */
export const both = <T>(fa: Predicate<T>) => (fb: Predicate<T>) => (x: T) => and(fa(x))(fb(x));

/**
 * Returns true if `fa(x)` or `fb(x)` are true. Same as `fb(x) || fa(x)`.
 *
 * @example
 *
 * ```ts
 * only(isOdd)(x => x === 2)(2)
 * // => true
 *
 * only(isOdd)(x => x === 2)(4)
 * // => false
 * ```
 */
export const only = <T>(fa: Predicate<T>) => (fb: Predicate<T>) => (x: T) => or(fa(x))(fb(x));

/**
 * Returns true if `fa(x)` or `fb(x)` is excessively true.
 *
 * @example
 *
 * ```ts
 * xonly(isEven)(x => x === 2)(2)
 * // => false
 *
 * xonly(isEven)(x => x === 2)(3)
 * // => false
 *
 * xonly(isEven)(x => x === 2)(4)
 * // => true
 * ```
 */
export const xonly = <T>(fa: Predicate<T>) => (fb: Predicate<T>) => (x: T) => xor(fa(x))(fb(x));

/**
 * Returns true if `x` and `y` are
 * [strictly equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality).
 * Same as `y === x`.
 *
 * @example
 *
 * ```ts
 * equal(42)(42)
 * // => true
 * ```
 */
export const equal = (x: unknown) => (y: unknown): boolean => y === x;

/**
 * Returns true if `x` and `y` are
 * [strictly unequal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality).
 * Same as `y !== x`.
 *
 * @example
 *
 * ```ts
 * unequal(42)(420)
 * // => true
 * ```
 */
export const unequal = (x: unknown) => (y: unknown): boolean => y !== x;

/**
 * Returns true if `y` is less than `x`. Same as `y < x`.
 *
 * @example
 *
 * ```ts
 * lt(9)(3)
 * // => true
 * ```
 */
export const lt = (x: number) => (y: number): boolean => y < x;

/**
 * Returns true if `y` is greater than `x`. Same as `y > x`.
 *
 * @example
 *
 * ```ts
 * gt(9)(3)
 * // => false
 * ```
 */
export const gt = (x: number) => (y: number): boolean => y > x;

/**
 * Returns true if `y` is less than or equal to `x`. Same as `y <= x`.
 *
 * @example
 *
 * ```ts
 * lte(9)(3)
 * // => true
 * ```
 */
export const lte = (x: number) => (y: number): boolean => y <= x;

/**
 * Returns true if `y` is greater than or equal to `x`. Same as `y >= x`.
 *
 * @example
 *
 * ```ts
 * gte(9)(3)
 * // => false
 * ```
 */
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
 * Returns a predicate function that negates the return value of `fn`.
 * Same as `!fn(x)`.
 *
 * @example
 *
 * ```ts
 * isEven(3)
 * // => false
 *
 * not(isEven)(3)
 * // => true
 * ```
 */
export const not = <T>(fn: Predicate<T>) => (x: T) => !fn(x);
