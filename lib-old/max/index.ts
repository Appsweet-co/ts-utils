import { curry } from '../curry';

/**
 * Returns the largest of zero or more numbers given as input. Same as `Math.max()`.
 *
 * Return a curried function by passing only one parameter in the initial call.
 *
 * ```
 * import { max } from '@appsweet-co/utils';
 *
 * max(3, 6, 9);
 * // => 9
 *
 * const max9 = max(9);
 *
 * max9(3, 12);
 * // => 12
 *
 * max9(3, 6);
 * // => 9
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * max(a)(...more);
 * max(a, ...more);
 * ```
 */
const max = (a: number, ...more: number[]) => (more) ? Math.max(a, ...more) : curry<number>(max, a);

export { max };
