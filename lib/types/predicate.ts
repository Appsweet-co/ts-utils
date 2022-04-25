import type { Unary, Binary, BinaryPartial, Ternary, TernaryPartial, Nary } from './arity';

/** A function that takes exactly one argument and always returns a boolean. */
export type Predicate<T> = Unary<T, boolean>;

/** A function that takes exactly two arguments and always returns a boolean. */
export type Predicate2<T, U> = Binary<T, U, boolean>;

/** A function that takes up to two arguments and always returns a boolean. */
export type Predicate2Partial<T, U> = BinaryPartial<T, U, boolean>;

/** A function that takes exactly three arguments and always returns a boolean. */
export type Predicate3<T, U, V> = Ternary<T, U, V, boolean>;

/** A function that takes up to three arguments and always returns a boolean. */
export type Predicate3Partial<T, U, V> = TernaryPartial<T, U, V, boolean>;

/** A function that takes any number of arguments and always returns a boolean. */
export type PredicateN<T> = Nary<T, boolean>;
