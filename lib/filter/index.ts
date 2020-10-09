/**
 * Applies one or more predicates to each item in a list.
 *
 * Functions are composed left-to-right.
 *
 * ```
 * import { filter } from '@appsweet-co/utils';
 *
 * const evens = filter(x => x !== 0, y => y % 2 ===0);
 *
 * evens([1, 2, 3, 0, 4, 5]);
 * // => [2, 4]
 * ```
 *
 * This function works very well with [[pipe]].
 */
const filter = (...fns: ((arg: any) => any)[]) => (init: any) =>
  fns.reduce((acc: any, fn: (arg: any) => any) => acc.filter(fn), init);

export { filter };
