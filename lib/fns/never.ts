/**
 * A function that never takes or returns a value. Useful for things like
 * [Exhaustiveness Checking](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking).
 *
 * @example
 *
 * ```ts
 * never('anything')
 * // => never
 * ```
 */
export const never = (x: never) => x;
