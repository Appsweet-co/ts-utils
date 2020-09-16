import { type } from '../type';
const clone = (val) => type('object', val) ? JSON.parse(JSON.stringify(val)) : val;
export { clone };
