import { curry } from '../curry';
const type = (type, val) => typeof val === type;
const typeC = curry(type);
export { type, typeC };
