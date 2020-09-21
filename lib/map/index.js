import { curry } from '../curry';
const map = (fn, list) => (list) ? list.map(fn) : curry(map, fn);
export { map };
