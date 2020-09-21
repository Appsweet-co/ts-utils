import { curry } from '../curry';
const subtract = (a, b) => (b) ? b - a : curry(subtract, a);
export { subtract };
