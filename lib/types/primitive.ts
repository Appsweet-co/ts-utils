import type { Nominal } from './nominal';

/** A string formatted as a [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors). */
export type CSSString = Nominal<'CSSString', string>;

/** A floating point number. */
export type Float = Nominal<'Float', number>;

/** A non-floating whole number. */
export type Integer = Nominal<'Integer', number>;

/** A string representation of JSON data. */
export type JSONString = Nominal<'JSONString', string>;

/** A string formatted as [Nano ID](https://github.com/ai/nanoid). */
export type NanoIdString = Nominal<'NanoIdString', string>;

/** A string formatted as [RFC 5545](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html). */
export type RRuleString = Nominal<'RRuleString', string>;

/** A string formatted as an absolute or relative [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL). */
export type URLString = Nominal<'URLString', string>;

/** A string formatted as [UUID v4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)). */
export type UUIDString = Nominal<'UUIDString', string>;
