/**
 * Returns `x` unchanged.
 *
 * @example
 *
 * ```ts
 * map(identity)([3, 6, 9])
 * // => [3, 6, 9]
 * ```
 */
export const identity = <T>(x: T) => x;
