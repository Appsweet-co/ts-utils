import { throwable } from './adt';

/** Stringify a value, or return the original if it's already a string. */
export const stringify = (x: unknown): string => typeof x === 'string' ? x : JSON.stringify(x);

/** Parse a JSON string, or return the original if it fails to parse. */
export const parse = <R = unknown>(x: string): string | R => throwable(JSON.parse)(x)(x) as R;
