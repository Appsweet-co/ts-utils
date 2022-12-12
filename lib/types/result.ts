/**
 * A [Union Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
 * that represents either a success ({@linkcode Ok}) or error ({@linkcode Err}) state.
 */
export type Result<T, E> = Ok<T> | Err<E>;

/**
 * Used in {@linkcode Result} to represent a success state.
 *
 * @see {@linkcode Result}, {@linkcode Err}
 */
export interface Ok<T> {
  error?: undefined;
  ok: T;
}

/**
 * Used in {@linkcode Result} to represent an error state.
 *
 * @see {@linkcode Result}, {@linkcode Ok}
 */
export interface Err<T> {
  error: T;
  ok?: undefined;
}
