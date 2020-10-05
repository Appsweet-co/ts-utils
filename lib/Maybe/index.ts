/* eslint-disable fp/no-unused-expression */

import { nil } from '../nil';
import { MaybeType } from './interface';
import { filtered, reduced } from './service';

/**
 * A [monad](https://en.wikipedia.org/wiki/Monad_(functional_programming)) for
 * working with values that may or may not be `null` or `undefined`.
 *
 * Inspired by [James Sinclair](https://jrsinclair.com/articles/2016/marvellously-mysterious-javascript-maybe-monad/),
 * [Pratica](https://github.com/apantle/pratica) and [Eric Elliott](https://medium.com/javascript-scene/javascript-monads-made-simple-7856be57bfe8).
 *
 * ```
 * import { Maybe } from '@appsweet-co/utils';
 * ```
 */
const Maybe = <T = any>(val?: T) => ({

  /**
   * Unwrap the value from the monad and returns the value in its raw form.
   *
   * ```
   * Maybe(6).value();
   * // => 6
   * ```
   */
  value: () => val,

  /**
   * Return a monad with the fallback value. This is a clean way to guarantee
   * a default value.
   *
   * ```
   * Maybe(null).else(6)
   * // => Maybe(6)
   * ```
   */
  else: (fallback: T) => Maybe(fallback),

  /**
   * Return a new monad from inside the first. This is a clean way to work with
   * a second value that may or may not be `null` or `undefined`.
   *
   * ```
   * Maybe(6).chain(x => Maybe(null))
   * // => Maybe(null)
   * ```
   *
   * Chain as many monads as you need:
   *
   * ```
   * Maybe(6)
   *  .chain(x => Maybe(x + 1)) // => Maybe(7)
   *  .chain(y => Maybe(y + 1)) // => Maybe(8)
   *  // etc...
   * ```
   */
  chain: (fn: (arg: T) => MaybeType<unknown>) => nil(val) ? Maybe() : fn(val),

  /**
   * Transform the value inside the monad using one or more transformation
   * functions.
   *
   * Functions are composed left-to-right.
   *
   * ```
   * Maybe(6).map(x => x * 2, y => y + 5)
   * // => Maybe(17)
   * ```
   */
  map: (...fns: any[]) => {
    if (nil(val)) {
      return Maybe();
    } else {
      const r = reduced(val);
      return Maybe(r(fns));
    }
  },

  /**
   * Send the value to one or more functions and return the original value. This
   * is a clean way to cause side effects.
   *
   * Functions are composed left-to-right.
   *
   * ```
   * Maybe(6)
   *  .pipe(x => x * 2, console.log) // => 12
   *  .map(x => x + 2)
   *  .pipe(console.log) // => 8
   * ```
   */
   pipe: (...fns: any[]) => {
    if (nil(val)) {
      return Maybe();
    } else {
      const r = reduced(val);
      r(fns);
      return Maybe(val);
    }
  },

  /**
   * Test the value against one or more predicates. Returns a monad with the value
   * if and only if all predicates return true.
   *
   * Functions are composed left-to-right.
   *
   * ```
   * Maybe(6).filter(x => x % 2 === 0, x < 10)
   * // => Maybe(6)
   *
   * Maybe(6).filter(x => x % 2 === 0, x < 5)
   * // => Maybe(undefined)
   * ```
   */
  filter: (...fns: any[]) => {
      const f = filtered(val);
      return nil(val) ? Maybe() : f(fns) ? Maybe(val) : Maybe();
  }

});

export { Maybe };
