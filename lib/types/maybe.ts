import type { Option } from './option';

/**
 * A [Union Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
 * that represents data that may exist ({@linkcode Just}) or may be undefined ({@linkcode Nothing}).
 *
 * @see Similar to an {@linkcode Option}
 */
export type Maybe<T> = Just<T> | Nothing;

/**
 * An interface that represents data that exists inside a {@linkcode Maybe}.
 */
export interface Just<T> {
  just: T;
  nothing?: undefined;
}

/**
 * An interface that represents data that's unavailable inside a {@linkcode Maybe}.
 */
export interface Nothing {
  just?: undefined;
  nothing: undefined;
}
