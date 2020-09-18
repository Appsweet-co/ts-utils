/**
 * Same as `Array.prototype.map()`, but curried.
 *
 * ```
 * import { map } from '@appsweet-co/utils';
 *
 * const double = map(x => x * x);
 *
 * double([1, 2, 3, 0, 4, 5]);
 * // => [2, 4, 6, 0, 8, 10]
 * ```
 */
const map = (fn: (value: any) => unknown) => (list: any[]) => list.map(fn);

export { map };
