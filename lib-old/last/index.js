import { curry } from '../curry';
import { neg } from '../neg';
const last = (n, list) => (list) ? list.slice(neg(n)) : curry(last, n);
export { last };
