import { Nominal } from './nominal';

/** A string formatted as [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).*/
export type ISOString = Nominal<'ISOString', string>;

/** A [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) measured in milliseconds. */
export type UnixMillis = Nominal<'UnixMillis', number>;

/** A [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time) measured in seconds. */
export type UnixSeconds = Nominal<'UnixSeconds', number>;
