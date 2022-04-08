/** Returns the first item in an array. Same as `list[0]`. */
export const head = <T>(list: T[]): T => list[0];

/** Returns all but the first item in an array. Same as `list.slice(1)`. */
export const tail = <T>(list: T[]): T[] => list.slice(1);

/** Returns the last item in an array. Same as `list[list.length - 1]`. */
export const last = <T>(list: T[]): T => list[list.length - 1];

/** Returns all but the last item in an array. Same as `list.slice(0, -1)`. */
export const init = <T>(list: T[]): T[] => list.slice(0, -1);

/**
 * Returns the first (or last) `count` of items from an array.
 *
 * ```ts
 * const list = [1, 2, 3, 4, 5, 6];
 *
 * take(0)(list);
 * // => []
 *
 * take(4)(list);
 * // => [1, 2, 3, 4]
 *
 * take(-2)(list);
 * // => [5, 6]
 * ```
 */
export const take = (count: number) => <T>(list: T[]): T[] =>
  (count === 0) ? [] : (count < 0) ? list.slice(count) : list.slice(0, count);

/**
 * Returns all but the first (or last) `count` of items from an array.
 *
 * ```ts
 * const list = [1, 2, 3, 4, 5, 6];
 *
 * drop(0)(list);
 * // => [1, 2, 3, 4, 5, 6]
 *
 * drop(4)(list);
 * // => [5, 6]
 *
 * drop(-2)(list);
 * // => [1, 2, 3, 4]
 * ```
 */
export const drop = (count: number) => <T>(list: T[]): T[] =>
  (count === 0) ? list : (count < 0) ? list.slice(0, count) : list.slice(count);

export const filter = <T>(predicate: (x: T) => boolean) => (list: T[]): T[] => list.filter(predicate);

export const map = <T, U>(fn: (x: T) => U) => (list: T[]): U[] => list.map(fn);

export const every = <T>(predicate: (x: T) => boolean) => (list: T[]): boolean => list.every(predicate);

export const some = <T>(predicate: (x: T) => boolean) => (list: T[]): boolean => list.some(predicate);

export const none = <T>(predicate: (x: T) => boolean) => (list: T[]): boolean => !list.every(predicate);

export const join = (separator: string) => <T>(list: T[]): string => list.join(separator);

export const split = (separator: string) => (item: string): string[] => item.split(separator);

// append
// prepend
