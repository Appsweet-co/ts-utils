import { curry } from '../curry';
const add = (a, b) => (b) ? a + b : curry(add, a);
export { add };
