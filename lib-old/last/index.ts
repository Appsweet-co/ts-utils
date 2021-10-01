import { neg } from '../neg';
import { curry } from '../x-curry';

/**
 * Returns the last `n` values in a list.
 *
 * Inspried by [Real World Haskell](http://book.realworldhaskell.org/read/types-and-functions.html).
 *
 * ```
 * import { last } from '@appsweet-co/utils';
 *
 * last(3, [1, 2, 3, 0, 4, 5]);
 * // => [0, 4, 5]
 *
 * const last3 = last(3)
 *
 * last3([1, 2, 3, 0, 4, 5]);
 * // => [0, 4, 5]
 *
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * last(n)(list);
 * last(n, list);
 * ```
 */
const last = (n: number, list?: any) => (list) ? list.slice(neg(n)) : curry(last, n);

export { last };
