/* eslint-disable @typescript-eslint/no-unused-vars */

import type { Effect } from '../types/effect';

/**
 * @deprecated In v0.37.0. Use {@linkcode Effect} instead.
 */
export const effect = <F extends (...args: unknown[]) => unknown>(fn: F) => (x: Parameters<F>[0]): Parameters<F>[0] => {
  // eslint-disable-next-line functional/no-expression-statement
  fn(x);
  return x;
};
