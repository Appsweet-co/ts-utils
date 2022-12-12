import type { Maybe } from "./maybe";

/**
 * A [Union Type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
 * that represents data that may ({@linkcode Some}) or may not ({@linkcode None}) be available.
 *
 * @see Similar to a {@linkcode Maybe}.
 */
export type Option<T> = Some<T> | None;

/**
 * An interface that represents data that's available inside an {@linkcode Option}.
 */
export interface Some<T> {
  none?: undefined;
  some: T;
}

/**
 * An interface that represents data that's unavailable inside an {@linkcode Option}.
 */
export interface None {
  none: undefined;
  some?: undefined;
}
