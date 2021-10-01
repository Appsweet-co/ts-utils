import { nil } from '../x-nil';
import { type } from '../x-type';
import { curry } from '../x-curry';

/**
 * Returns `val` if and only if:
 *
 * 1. `val` is not null or undefined; and
 * 2. `val` and `fallback` are of the same type.
 *
 * Returns `fallback` otherwise.
 *
 * ```
 * import { or } from '@appsweet-co/utils';
 *
 * or([], [1, 2, 3, 0, 4, 5]);
 * // => [1, 2, 3, 0, 4, 5]
 *
 * const orArray = or([]);
 *
 * orArray(true);
 * // => [];
 *
 * The following are equivalent:
 *
 * ```
 * or(fallback)(val);
 * or(fallback, val);
 * ```
 */
const or = (...args: [fallback: any, val?: any]) => {
  const [fallback, val] = args;
  const success = !nil(val) && type(typeof fallback, val);

  return (args.length >= 2) ?
    (success) ? val : fallback :
    curry(or, fallback);
};

export { or };
