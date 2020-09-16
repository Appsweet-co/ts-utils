import { type } from '../type';

/**
 * Stringify a value, or return the original.
 *
 * ```
 * import { stringify } from '@appsweet-co/utils';
 *
 * stringify('foobar');
 * // => 'foobar'
 *
 * stringify(123);
 * // => '123'
 * ```
 */
const stringify = (val: any): string =>
  !type('string', val) ? JSON.stringify(val) : val;

export { stringify };
