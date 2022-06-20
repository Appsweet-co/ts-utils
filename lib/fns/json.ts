/** Stringify a value, or return the original if it's already a string. */
export const stringify = (x: unknown): string => typeof x === 'string' ? x : JSON.stringify(x);

/** Parse a JSON string, or return the original if it fails to parse. */
export const parse = <R = unknown>(x: string): string | R => {
  // eslint-disable-next-line functional/no-try-statement
  try {
    return JSON.parse(x) as R;
  } catch (_) {
    return x;
  }
};
