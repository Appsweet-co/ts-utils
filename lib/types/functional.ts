/** A function that takes zero arguments. */
export type Nullary<R> = () => R;

/** A function that takes exactly one argument. */
export type Unary<T, R> = (x: T) => R;

/** A function that takes exactly two arguments. */
export type Binary<T, U, R> = (x: T, y: U) => R;

/** A function that takes exactly three arguments. */
export type Ternary<T, U, V, R> = (x: T, y: U, z: V) => R;

/** A function that takes any number of arguments. */
export type Nary<T, R> = (...args: T[]) => R;

/** A function that takes exactly one argument and always returns a boolean. */
export type Predicate<T> = Unary<T, boolean>;

/** A function that takes exactly two arguments and always returns a boolean. */
export type Predicate2<T, U> = Binary<T, U, boolean>;

/** A function that takes exactly three arguments and always returns a boolean. */
export type Predicate3<T, U, V> = Ternary<T, U, V, boolean>;

/** A curried function that takes two arguments. */
export type Curry2<T, U, R> = (x: T) => (y: U) => R;

/** A curried function that takes three arguments. */
export type Curry3<T, U, V, R> = (x: T) => (y: U) => (z: V) => R;
