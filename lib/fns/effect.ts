/**
 * Executes `fn(x)` as a [side effect](https://en.wikipedia.org/wiki/Side_effect_(computer_science))
 * and returns `x` unchanged.
 *
 * @example
 *
 * ```ts
 * effect(someSideEffect)(42)
 * // => 42
 * ```
 */
export const effect = <F extends (...args: unknown[]) => unknown>(fn: F) => (x: Parameters<F>[0]): Parameters<F>[0] => {
  // eslint-disable-next-line functional/no-expression-statement
  fn(x);
  return x;
};
