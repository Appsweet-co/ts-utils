import { curry } from '../curry';

/**
 * Returns `true` if and only if all elements of the list match the predicate.
 * Same as `list.every(fn)`.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#all).
 *
 * ```
 * import { all } from '@appsweet-co/utils';
 *
 * all(x => x === 2, [2, 2, 2]);
 * // => true
 *
 * const all2 = all(x => x ===2);
 *
 * all2([2, 2, 10]);
 * // => false
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * all(fn)(list);
 * all(fn, list);
 * ```
 */
const all = (fn: (...args: unknown[]) => unknown, list: unknown[]) => (list) ? list.every(fn) : curry<boolean>(all, fn);

export { all };
