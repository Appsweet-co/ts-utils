import { curry } from '../curry';
const type = (kind, val) => (val) ? typeof val === kind : curry(type, kind);
export { type };
