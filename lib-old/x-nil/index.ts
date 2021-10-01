/**
 * Returns `true` if the value is null or undefined.
 *
 * ```
 * import { nil } from '@appsweet-co/utils';
 *
 * nil([1, 2, 3, 0, 4, 5]);
 * // => false
 *
 * nil(null);
 * // => true
 * ```
 *
 * @param {*} val
 */
const nil = (val: any) => val === null || val === void 0;

export { nil };
