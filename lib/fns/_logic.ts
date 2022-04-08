/** Same as `a && b`. */
export const and = (a: boolean) => (b: boolean): boolean => a && b;

/** Same as `a || b`. */
export const or = (a: boolean) => (b: boolean): boolean => a || b;

/** Returns the result of `fn(x)` when the predicate is true, or `x` when the predicate is false. */
export const when = <T>(predicate: (x: T) => boolean) => <U>(fn: (x: T) => U) => (x: T): U | T => predicate(x) ? fn(x) : x;

/** Returns `x` when the predicate is true, or the result of `fn(x)` when the predicate is false. */
export const unless = <T>(predicate: (x: T) => boolean) => <U>(fn: (x: T) => U) => (x: T): T | U => predicate(x) ? x : fn(x);

