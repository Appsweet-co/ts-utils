import { curry } from '../curry';
const all = (fn, list) => (list) ? list.every(fn) : curry(all, fn);
export { all };
