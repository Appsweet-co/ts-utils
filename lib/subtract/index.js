import { curry } from '../curry';
const subtract = (a, b) => a - b;
const subtractC = curry(subtract);
export { subtract, subtractC };
