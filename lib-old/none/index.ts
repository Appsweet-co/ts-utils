import { curry } from '../curry';

/**
 * Returns `true` if and only if no elements of of the list match the predicate
 * Same as `!list.every(fn)`.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#none).
 *
 * ```
 * import { none } from '@appsweet-co/utils';
 *
 * none(x => x === 2, [1, 2, 3]);
 * // => false
 *
 * const none2 = none(x => x ===2);
 *
 * none2([1, 3, 5]);
 * // => true
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * none(fn)(list);
 * none(fn, list);
 * ```
 */
const none = (fn: (...args: unknown[]) => unknown, list: unknown[]) => (list) ? !list.every(fn) : curry<boolean>(none, fn);

export { none };
