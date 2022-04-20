import { Binary, Ternary } from '../types/functional';

/**
 * Returns a curried function that accepts arguments in reverse order.
 *
 * @example
 *
 * ```ts
 * add(3, 9)
 * // => 12
 *
 * flip(add)(9)(3)
 * // => 12
 * ```
 */
export const flip = <T, U, R>(fn: Binary<T, U, R>) => (y: U) => (x: T): R => fn(x, y);

/**
 * Returns a curried function that accepts arguments in reverse order.
 *
 * @example
 *
 * ```ts
 * add(3, 6, 9)
 * // => 18
 *
 * flip(add)(9)(6)(3)
 * // => 18
 * ```
 */
export const flip3 = <T, U, V, R>(fn: Ternary<T, U, V, R>) => (z: V) => (y: U) => (x: T): R => fn(x, y, z);
