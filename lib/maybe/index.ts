import { curry } from '../curry';
import { nil } from '../nil';
import { type } from '../type';

/**
 * Returns `val` if and only if:
 *
 * 1. `val` is not null or undefined; and
 * 2. `val` and `fallback` are of the same type.
 *
 * Returns `fallback` otherwise.
 *
 * ```
 * import { maybe } from '@appsweet-co/utils';
 *
 * maybe([], [1, 2, 3, 0, 4, 5]);
 * // => [1, 2, 3, 0, 4, 5]
 *
 * const maybeArray = maybe([]);
 *
 * maybeArray(true);
 * // => [];
 *
 * The following are equivalent:
 *
 * ```
 * maybe(fallback)(val);
 * maybe(fallback, val);
 * ```
 */
const maybe = (...args: [fallback: any, val?: any]) => {
  const [ fallback, val ] = args;
  const success = !nil(val) && type(typeof fallback, val);

  return (args.length >= 2) ?
    (success) ? val : fallback :
    curry(maybe, fallback);
};

export { maybe };
