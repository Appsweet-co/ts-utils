import type { Nominal } from './nominal';

/** A duration measured in milliseconds. */
export type Milliseconds = Nominal<'Milliseconds', number>;

/** A duration measured in seconds. */
export type Seconds = Nominal<'Seconds', number>;

/** A duration measured in minutes. */
export type Minutes = Nominal<'Minutes', number>;

/** A duration measured in hours. */
export type Hours = Nominal<'Hours', number>;

/** A duration measured in days. */
export type Days = Nominal<'Days', number>;

/** A duration measured in weeks. */
export type Weeks = Nominal<'Weeks', number>;

/** A duration measured in months. */
export type Months = Nominal<'Months', number>;

/** A duration measured in years. */
export type Years = Nominal<'Years', number>;
