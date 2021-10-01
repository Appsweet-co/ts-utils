/**
 * Applies one or more transformation functions to each item in a list.
 *
 * Functions are composed left-to-right.
 *
 * Inspired by [Ramda.js](https://ramdajs.com/docs/#map).
 *
 * @example
 *
 * ```ts
 * map<string[]>([3, 6, 9], [x => x + 1, y => y.toString()]);
 * // => ['4', '7', '10']
 * ```
 */
export const map = <T extends ReadonlyArray<any>>(list: ReadonlyArray<any>, fns: ((arg: any) => any)[]): T =>
  fns.reduce((acc: any, fn: (arg: any) => any) => acc.map(fn), list);
