import { throwable } from './adt';

/** Stringify a value, or return the original if it's already a string. */
export const stringify = (x: unknown): string => typeof x === 'string' ? x : JSON.stringify(x);

/**
 * Parse a JSON string, or return the original if it fails to parse.
 *
 * @see {@linkcode parseOr}
 *
 * @example
 *
 * ```ts
 * parse('["Good","JSON"]')
 * // => ['Good', 'JSON']
 *
 * parse('[Bad, JSON]')
 * // => '[Bad, JSON]'
 * ```
 */
export const parse = <R = unknown>(x: string): string | R => throwable(JSON.parse)(x)(x) as R;

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
export const parseOr = <R>(fallback: R) => (x: string): R => throwable(JSON.parse)(fallback)(x) as R;
