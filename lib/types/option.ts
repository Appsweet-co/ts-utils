/**
 * A [Union Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
 * that represents data that may ({@linkcode Some}) or may not ({@linkcode None}) exist.
 *
 * @see {@linkcode Some}, {@linkcode None}
 */
export type Option<T> = Some<T> | None;

/**
 * Used in {@linkcode Option} to represent data that definitely exists.
 *
 * @see {@linkcode Option}, {@linkcode None}
 */
export interface Some<T> {
  none?: undefined;
  some: T;
}

/**
 * Used in {@linkcode Option} to represent data that definitely does not exist.
 *
 * @see {@linkcode Option}, {@linkcode Some}
 */
export interface None {
  none?: undefined;
  some?: undefined;
}
