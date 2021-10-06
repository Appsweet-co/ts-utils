/**
 * Returns true if `x` is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).
 *
 * @example
 *
 * ```ts
 * [false, null, undefined, 0, -0, 0n, NaN, ""].every(isFalsy);
 * // => true
 * ```
 */
export const isFalsy = (x: any) => !x;


