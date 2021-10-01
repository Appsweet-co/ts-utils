/**
 * Applies one or more filter functions to each item in a list.
 *
 * Functions are composed left-to-right.
 *
 * @example
 *
 * ```ts
 * filter<number[]>([1, 2, 3, 0, 4, 5], [x => x !== 0, y => y % 2 === 0]);
 * // => [2, 4]
 * ```
 */
export const filter = <T extends ReadonlyArray<any>>(list: ReadonlyArray<any>, fns: ((arg: any) => any)[]): T =>
  fns.reduce((acc: any, fn: (arg: any) => any) => acc.filter(fn), list);
