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
const parse = (val) => {
  try {
    return JSON.parse(val);
  } catch () {
    return val;
  }
};
