
/**
 * Wraps `fn` in a [`try...catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
 * and returns the result of `fn(x)`, or returns the fallback if `fn(x)` throws an error.
 *
 * @example
 *
 * ```ts
 * throwable(JSON.parse)('fallback')('["Good","JSON"]')
 * // => ['Good', 'JSON']
 *
 * throwable(JSON.parse)('fallback')('[Bad, JSON]')
 * // => 'fallback'
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throwable = <F extends (...args: any) => any>(fn: F) => (fallback: ReturnType<F>) => (...args: Parameters<F>): ReturnType<F> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return fn(args) as ReturnType<F>;
  } catch (_) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return fallback;
  }
};
