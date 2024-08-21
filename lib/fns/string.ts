/** Converts all characters to lowercase. Same as `x.toLowerCase()`. */
export const lowercase = (x: string) => x.toLowerCase();

/** Converts all characters to uppercase. Same as `x.toUpperCase()`. */
export const uppercase = (x: string) => x.toUpperCase();

/** Removes all whitespace and line terminators around a string. Same as `x.trim()`. */
export const trim = (x: string) => x.trim();

/** Returns `text` as a string broken into chunks of `size`, separated by spaces. */
export const chunk = (size: number) => (text: string): string => (text.match(new RegExp(`.{1,${size}}`, 'g')) ?? []).join(' ');
