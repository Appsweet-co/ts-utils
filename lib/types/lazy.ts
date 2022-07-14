import { Nullary } from './arity';

/**
 * Syntatic sugar for {@linkcode Nullary}. Useful for things like
 * [lazy evaluation](https://en.wikipedia.org/wiki/Lazy_evaluation).
 *
 * @alias {@linkcode Nullary}
 */
export type Lazy<T> = Nullary<T>;
