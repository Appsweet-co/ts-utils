/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Nullary, Unary } from '../types/arity';
import type { Predicate } from '../types/predicate';
import { isNil } from './predicate';

import type { Either } from '../types/either';
import type { Option } from '../types/option';
import type { Result } from '../types/result';

/**
 * @deprecated In v0.35.0. Use {@linkcode Either} instead.
 */
export const either = <T, R>(right: Unary<T, R>) => (left: Unary<T, R>) => (pred: Predicate<T>) => (x: T): R => {
  return pred(x) ? right(x) : left(x);
};

/**
 * @deprecated In v0.35.0. Use {@linkcode Option} instead.
 */
export const maybe = <R>(fallback: R) => <T>(just: Unary<T, R>) => (x: T): R => isNil(x) ? fallback : just(x);

/**
 * @deprecated In v0.35.0. Use {@linkcode Result} instead.
 */
export const result = <T, R>(ok: Unary<T, R>) => (err: Nullary<R>) => (x: T): R => isNil(x) ? err() : ok(x);
