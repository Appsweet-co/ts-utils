import { Nary } from '../types/arity';

/**
 * Takes a funcation of any [arity](https://en.wikipedia.org/wiki/Arity)
 * and returns a nullary function that ignores all parameters.
 */
export const nullary = <T, R>(fn: Nary<T, R>) => (): R => fn();

/**
 * Takes a funcation of any [arity](https://en.wikipedia.org/wiki/Arity)
 * and returns a unary function that ignores all but the first parameter.
 */
export const unary = <T, R>(fn: Nary<T, R>) => (x: T): R => fn(x);

/**
 * Takes a funcation of any [arity](https://en.wikipedia.org/wiki/Arity)
 * and returns a binary function that ignores all but the two parameter.
 */
export const binary = <T, R>(fn: Nary<T, R>) => (x: T) => (y: T): R => fn(x, y);

/**
 * Takes a funcation of any [arity](https://en.wikipedia.org/wiki/Arity)
 * and returns a binary function that ignores all but the three parameter.
 */
export const ternary = <T, R>(fn: Nary<T, R>) => (x: T) => (y: T) => (z: T): R => fn(x, y, z);
