/** A function that takes zero arguments. */
export type Nullary<R> = () => R;

/** A function that takes only one argument. */
export type Unary<T, R> = (x: T) => R;

/** A function that takes only two arguments. */
export type Binary<T, U, R> = (x: T, y: U) => R;

/** A function that takes only three arguments. */
export type Ternary<T, U, V, R> = (x: T, y: U, z: V) => R;
