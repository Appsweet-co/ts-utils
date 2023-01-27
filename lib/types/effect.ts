import { Nominal } from './nominal';

/**
 * A type that generates [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science))
 * as part of its regular execution.
 *
 * @example
 *
 * ```ts
 * type Foo = (x: number) => Effect<boolean>;
 * ```
 */
export type Effect<T> = Nominal<'Effect', T>;
