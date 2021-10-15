/**
 * Returns true if `x` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).
 *
 * @example
 *
 * ```ts
 * [true, {}, [], 42, "0", "false", new Date(), -42, 12n, 3.14, -3.14, Infinity, -Infinity].every(isTruthy);
 * // => true
 * ```
 */
export const isTruthy = (x: unknown) => !!x;
