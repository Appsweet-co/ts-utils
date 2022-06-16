import type { Nominal } from './nominal';

/** A [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) measured in milliseconds. */
export type UnixMillis = Nominal<'UnixMillis', number>;

/** A [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) measured in seconds. */
export type UnixSeconds = Nominal<'UnixSeconds', number>;
