import { curry } from '../curry';

/**
 * Executes a reducer function on each element of an array and returns a single
 * output value. Same as `list.reduce(fn, init)`.
 *
 * Inspired by [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).
 *
 * ```
 * import { reduce } from '@appsweet-co/utils';
 *
 * reduce((acc, cur) => acc + cur, [1, 2, 3]);
 * // => 6
 *
 * const sum = reduce((acc, cur) => acc + cur);
 *
 * sum([1, 2, 3]);
 * // => 6
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * reduce(fn)(list);
 * reduce(fn, list);
 * ```
 */
const reduce = (fn: (acc: unknown, cur: unknown) => unknown, list?: unknown[]) => (list) ? list.reduce(fn) : curry<unknown>(reduce, fn);

export { reduce };
