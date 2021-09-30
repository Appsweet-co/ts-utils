import { curry } from '../curry';
const first = (n, list) => (list) ? list.slice(0, n) : curry(first, n);
export { first };
