import { type } from '../type';
const parse = (val) => type('string', val) ? JSON.parse(val) : val;
export { parse };
