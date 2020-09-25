import { curry } from '../curry';
const filter = (fn, list) => (list) ? list.filter(fn) : curry(filter, fn);
export { filter };
