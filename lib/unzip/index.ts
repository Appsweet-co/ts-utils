import { curry } from '../curry';
import { filter } from '../filter';

/**
 * Returns an array of arrays. The first element is a list of items that
 * pass the predicate. The second element is a list of items that fail.
 *
 * ```
 * import { unzip } from '@appsweet-co/utils';
 *
 * unzip(x => x % 2 === 0, [1, 2, 3, 0, 4, 5])
 * // => [[2, 0, 4], [1, 3, 5]]
 *
 * const evens = unzip(x => x % 2 === 0)
 *
 * evens([1, 2, 3, 0, 4, 5])
 * // => [[2, 0, 4], [1, 3, 5]]
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * unzip(fn)(list);
 * unzip(fn, list);
 * ```
 */
const unzip = (fn: (value: any) => unknown, list: unknown[]) =>
  (list) ? [ filter(fn, list), filter(v => !fn(v), list) ] : curry<unknown>(unzip, fn);

export { unzip };
