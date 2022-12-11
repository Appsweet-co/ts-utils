/**
 * A [Union Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
 * that represents either a success ({@linkcode Ok}) or error ({@linkcode Err}) state,
 * but never both states at the same time.
 */
export type Result<T, E> = Ok<T> | Err<E>;

/**
 * An interface that represents the success state of a {@linkcode Result}.
 */
export interface Ok<T> {
  error?: undefined;
  ok: T;
}

/**
 * An interface that represents the error state of a {@linkcode Result}.
 */
export interface Err<T> {
  error: T;
  ok?: undefined;
}
