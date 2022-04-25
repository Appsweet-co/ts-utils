/**
 * Returns a function that always returns `x`.
 *
 * @example
 *
 * ```ts
 * constant(42)('anything')
 * // => 42
 * ```
 */
export const constant = <T>(x: T) => (): T => x;
