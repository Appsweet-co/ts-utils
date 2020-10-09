/**
 * Applies one or more transformation functions to each item in a list.
 *
 * Functions are composed left-to-right.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#map).
 *
 * ```
 * import { map } from '@appsweet-co/utils';
 *
 * const add4 = map(x => x + 1, y => y + 3);
 *
 * add4([1, 2, 3])
 * // => [5, 6, 7]
 * ```
 *
 * This function works very well with [[pipe]].
 */
const map = (...fns: ((arg: any) => any)[]) => (init: any) =>
  fns.reduce((acc: any, fn: (arg: any) => any) => acc.map(fn), init);

export { map };
