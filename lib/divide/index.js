import { curry } from '../curry';
const divide = (a, b) => (b) ? a / b : curry(divide, a);
export { divide };
