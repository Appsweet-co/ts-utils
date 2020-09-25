import { curry } from '../curry';

/**
 * Creates a new array with all elements that pass the predicate.
 * Same as `list.fitler(fn)`.
 *
 * ```
 * import { filter } from '@appsweet-co/utils';
 *
 * filter(x => x % 2 === 0, [1, 2, 3, 4]);
 * // => [2, 4]
 *
 * const evens = filter(x => x % 2 === 0);
 *
 * double([1, 2, 3, 4]);
 * // => [2, 4]
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * filter(fn)(list);
 * filter(fn, list);
 * ```
 */
const filter = (fn: (value: any) => unknown, list?: unknown[]) => (list) ? list.filter(fn) : curry<unknown>(filter, fn);

export { filter };
