/**
 * A [Union Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
 * that represents one of two states ({@linkcode Right} or {@linkcode Left}),
 * but never both states at the same time.
 */
export type Either<R, L> = Right<R> | Left<L>;

/**
 * An interface that represents one of two states of an {@linkcode Either}.
 *
 * The {@linkcode Right} state usually represents the positive or successful path.
 */
export interface Right<T> {
  left?: undefined;
  right: T;
}

/**
 * An interface that represents one of two states of an {@linkcode Either}.
 *
 * The {@linkcode Left} state usually represents the negative or unsuccessful path.
 */
export interface Left<T> {
  left: T;
  right?: undefined;
}
