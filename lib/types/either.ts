/**
 * A [Union Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
 * that represents one of two states ({@linkcode Right} or {@linkcode Left}).
 */
export type Either<R, L> = Right<R> | Left<L>;

/**
 * Used in {@linkcode Either} to represent one of two states.
 *
 * The {@linkcode Right} state usually represents a positive or successful state.
 */
export interface Right<T> {
  left?: undefined;
  right: T;
}

/**
 * Used in {@linkcode Either} to represent one of two states.
 *
 * The {@linkcode Left} state usually represents a negative or unsuccessful state.
 */
export interface Left<T> {
  left: T;
  right?: undefined;
}
