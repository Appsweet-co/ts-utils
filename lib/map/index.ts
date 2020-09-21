import { curry } from '../curry';

/**
 * Applies a function to each of item in a list and returns a list of the same
 * shape. Same as `list.map(fn)`.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#map).
 *
 * ```
 * import { map } from '@appsweet-co/utils';
 *
 * map(x => x * x, [1, 2, 3]);
 * // => [2, 4, 6]
 *
 * const double = map(x => x * x);
 *
 * double([1, 2, 3]);
 * // => [2, 4, 6]
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * map(fn)(list);
 * map(fn, list);
 * ```
 */
const map = (fn: (value: any) => unknown, list?: unknown[]) => (list) ? list.map(fn) : curry<unknown>(map, fn);

export { map };
