/**
 * Returns the modulo of two numbers.
 *
 * @example
 *
 * ```ts
 * mod([3, 9]);
 * // => 3
 *
 * mod([9, 3]);
 * // => 0
 * ```
 */
export const mod = ([a, b]: [number, number]): number => a % b;
