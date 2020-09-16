import { curry } from '../curry';
const divide = (a, b) => a / b;
const divideC = curry(divide);
export { divide, divideC };
