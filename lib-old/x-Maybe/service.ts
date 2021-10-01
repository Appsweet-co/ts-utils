/** @internal */
export const reduced = (val: any) => (fns: any[]) => {
  return fns.reduce((acc: any, fn: (...args: any[]) => any) => fn(acc), val);
};

/** @internal */
// export const pipped = (val: any) => (fns: any[]) => {
//   return fns.forEach(fn => fn(val));
// };

/** @internal */
export const filtered = (val: any) => (fns: any[]) => {
  return fns.every(fn => fn(val));
};
