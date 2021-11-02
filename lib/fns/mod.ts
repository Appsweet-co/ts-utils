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

/**
 * Curried version of [[mod]]. Great for looping over arrays.
 *
 * @example
 *
 * ```ts
 * const list = [3, 6, 9, 12, 15];
 * list.map(mod_(9));
 * // => [3, 6, 0, 3, 6];
 * ```
 */
export const mod_ = (b: number) => (a: number) => a % b;
