import { div } from './div';
import { sub } from './sub';

/**
 * Returns the decimal fraction of a value compared against a `min` and `max`.
 *
 * @example
 *
 * ```ts
 * ratio({ min: 0, max: 10, val: 5 });
 * // => 0.5
 *
 * ratio({ min: 3, max: 9, val: 6 });
 * // => 0.5
 * ```
 */
export const ratio = ({ min, max, val }: { min: number; max: number; val: number; }) => div([sub([val, min]), sub([max, min])]);
