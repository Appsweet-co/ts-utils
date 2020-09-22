import { curry } from '../curry';

/**
 * Returns `true` if at least one element in the list matches the predicate.
 * Same as `list.some(fn)`.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#any).
 *
 * ```
 * import { any } from '@appsweet-co/utils';
 *
 * any(x => x === 2, [1, 2, 3]);
 * // => true
 *
 * const any2 = any(x => x === 2);
 *
 * any2([1, 3, 5]);
 * // => false
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * any(fn)(list);
 * any(fn, list);
 * ```
 */
const any = (fn: (...args: unknown[]) => unknown, list: unknown[]) => (list) ? list.some(fn) : curry<boolean>(any, fn);

export { any };
