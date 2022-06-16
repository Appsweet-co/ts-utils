import { Nominal } from './nominal';

/** A string formatted as [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).*/
export type ISOCountry = Nominal<'ISOCountry', string>;

/** A string formatted as [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1).*/
export type ISOLanguage = Nominal<'ISOLanguage', string>;

/** A string formatted as `xx-YY`, where `xx` is an {@linkcode ISOLanguage} and `YY` is an {@linkcode ISOCountry}. */
export type ISOLocale = Nominal<'ISOLocale', string>;

/** A string formatted as [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601).*/
export type ISOTimestamp = Nominal<'ISOTimestamp', string>;
