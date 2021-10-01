import { type } from '../x-type';

/**
 * Parse a JSON string, or return the original.
 *
 * ```
 * import { parse } from '@appsweet-co/utils';
 *
 * parse('foobar');
 * // => 'foobar'
 *
 * parse('{"hello": "world"}');
 * // => { hello: 'world' }
 * ```
 */
const parse = (val: any): string =>
  type('string', val) ? JSON.parse(val) : val;

export { parse };
