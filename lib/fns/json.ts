import { throwable } from './adt';

/** Stringify a value, or return the original if it's already a string. */
export const stringify = (x: unknown): string => typeof x === 'string' ? x : JSON.stringify(x);

/**
 * Parse a JSON string, or return the fallback if it fails to parse.
 *
 * @see {@linkcode parse}
 *
 * @example
 *
 * ```ts
 * parseOr(['fallback'])('["Good","JSON"]')
 * // => ['Good', 'JSON']
 *
 * parseOr(['fallback'])('[Bad, JSON]')
 * // => ['fallback']
 * ```
 */
export const parse = <R>(fallback: R) => (x: string): R => throwable(JSON.parse)(fallback)(x) as R;
