import { nil } from '../nil';

/**
 * A [monad](https://en.wikipedia.org/wiki/Monad_(functional_programming)) for
 * working with values that may exist, or may be `null` or `undefined`.
 *
 * Inspired by [James Sinclair](https://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad/).
 */
const Maybe = {

  /**
   * Create a new object, passing in the `value`.
   *
   * ```
   * import { Maybe } from '@appsweet-co/utils';
   *
   * const maybeFive = Maybe.of(5);
   * ```
   */
  of: (value?: unknown) => ({

    /**
     * Emit the `value`.
     *
     * ```
     * maybeFive.emit();
     * // => 5
     * ```
     */
    emit: () => value,

    /**
     * Return the `value` if it exists. Otherwise, return the `fallback`.
     *
     * ```
     * maybeFive.getOrElse(null)
     * // => 5
     * ```
     */
    getOrElse: (fallback: any) => {
      return nil(value) ? fallback : value;
    },

    /**
     * Map the `value` to a new value and return a new monad.
     *
     * Ignores `value`s that are `null` or `undefined`.
     *
     * ```
     * maybeFive
     *  .map(x => x * 2)
     *  .map(x => x * 100)
     *  .emit();
     * // => 2500
     * ```
     */
    map: (fn: (arg: any) => any) => {
      return (nil(value)) ? Maybe.of() : Maybe.of(fn(value));
    }
  })
};

export { Maybe };
