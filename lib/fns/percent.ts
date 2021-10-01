import { mult } from './mult';
import { ratio } from './ratio';

/**
 * Returns the numerical percentage of a value compared against a `min` and `max`.
 *
 * @example
 *
 * ```ts
 * percent({ min: 0, max: 10, val: 5 });
 * // => 50
 *
 * percent({ min: 3, max: 9, val: 6 });
 * // => 50
 * ```
 */
export const percent = ({ min, max, val }: { min: number; max: number; val: number; }) => mult([ratio({ min, max, val }), 100]);
