/** A curried function that takes two arguments. */
export type Curry2<T, U, R> = (x: T) => (y: U) => R;

/** A curried function that takes three arguments. */
export type Curry3<T, U, V, R> = (x: T) => (y: U) => (z: V) => R;
