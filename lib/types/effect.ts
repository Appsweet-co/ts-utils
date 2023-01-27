import { Nominal } from './nominal';

/**
 * A type that generates [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science))
 * as part of its regular execution.
 */
export type Effect<T> = Nominal<'Effect', T>;
