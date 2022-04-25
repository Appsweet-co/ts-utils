import type { Binary } from '../types/arity';

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
