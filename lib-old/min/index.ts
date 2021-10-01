import { curry } from '../x-curry';

/**
 * Returns the largest of zero or more numbers given as input. Same as `Math.min()`.
 *
 * Return a curried function by passing only one parameter in the initial call.
 *
 * ```
 * import { min } from '@appsweet-co/utils';
 *
 * min(3, 6, 9);
 * // => 3
 *
 * const min9 = min(9);
 *
 * min9(3, 12);
 * // => 3
 * ```
 *
 * The following are equivalent:
 *
 * ```
 * min(a)(...more);
 * min(a, ...more);
 * ```
 */
const min = (a: number, ...more: number[]) => (more) ? Math.min(a, ...more) : curry<number>(min, a);

export { min };
