import { curry } from '../curry';
import { type } from '../type';

/**
 * Returns `val` if `fallback` and `val` are of the same type.
 * Otherwise, returns `fallback`.
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
const maybe = (fallback: any, val?: any) =>
  (val) ?
    type(typeof fallback, val) ? val : fallback :
    curry(maybe, fallback);

export { maybe };
