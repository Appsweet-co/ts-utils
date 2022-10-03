/** A curried function that takes exactly two arguments. */
export type Curry2<T, U, R> = (x: T) => (y: U) => R;

/** A curried function that takes exactly three arguments. */
export type Curry3<T, U, V, R> = (x: T) => (y: U) => (z: V) => R;

/**
 * A function called once on each item in an array and returns the accumulated
 * result. The function passes the current accumulated value as the first argument
 * of the next function call.
 *
 * @param acc The accumulated result.
 * @param next The next item in the array.
 * @param index The array index of the next item.
 * @param list The original array.
 */
export type Reducer<T> = (acc: T, next: T, index?: number, list?: T[]) => T;
