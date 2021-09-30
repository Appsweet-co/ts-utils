import { curry } from '../curry';
const prop = (key, obj) => (obj) ? obj[key] : curry(prop, key);
export { prop };
