import type { Nary } from '../types/arity';

/**
 * Takes a funcation of any [arity](https://en.wikipedia.org/wiki/Arity)
 * and returns a function that ignores all parameters.
 */
export const nullary = <T, R>(fn: Nary<T, R>) => (): R => fn();

/**
 * Takes a function of any [arity](https://en.wikipedia.org/wiki/Arity)
 * and returns a function that ignores all but the first parameter.
 */
// eslint-disable-next-line functional/prefer-tacit
export const unary = <T, R>(fn: Nary<T, R>) => (x: T): R => fn(x);

/**
 * Takes a funcation of any [arity](https://en.wikipedia.org/wiki/Arity)
 * and returns a curried function that ignores all but the first two parameters.
 *
 * @alias {@linkcode curry2}
 */
export const binary = <T, R>(fn: Nary<T, R>) => (x: T) => (y: T): R => fn(x, y);

/**
 * Takes a funcation of any [arity](https://en.wikipedia.org/wiki/Arity)
 * and returns a curried function that ignores all but the first three parameters.
 *
 * @alias {@linkcode curry3}
 */
export const ternary = <T, R>(fn: Nary<T, R>) => (x: T) => (y: T) => (z: T): R => fn(x, y, z);

/**
 * Alias for {@linkcode binary}.
 */
export const curry2 = binary;

/**
 * Alias for {@linkcode ternary}.
 */
export const curry3 = ternary;
