import { isTrue } from './is-true';

export const isPrimitive = (x: any) => [
  typeof x === 'bigint',
  typeof x === 'boolean',
  typeof x === 'number',
  typeof x === 'string',
  typeof x === 'symbol',
  typeof x === null,
  typeof x === undefined,
].some(isTrue);
