import { curry } from '../x-curry';

/**
 * Returns the first `n` values in a list.
 *
 * Inspried by [Real World Haskell](http://book.realworldhaskell.org/read/types-and-functions.html).
 *
 * ```
 * import { first } from '@appsweet-co/utils';
 *
 * first(3, [1, 2, 3, 0, 4, 5]);
 * // => [1, 2, 3]
 *
 * const first3 = first(3)
 *
 * first3([1, 2, 3, 0, 4, 5]);
 * // => [1, 2, 3]
 *
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * first(n)(list);
 * first(n, list);
 * ```
 */
const first = (n: number, list?: any) => (list) ? list.slice(0, n) : curry(first, n);

export { first };
