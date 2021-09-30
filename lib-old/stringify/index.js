import { type } from '../type';
const stringify = (val) => !type('string', val) ? JSON.stringify(val) : val;
export { stringify };
