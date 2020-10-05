export const reduced = (val) => (fns) => {
    return fns.reduce((acc, fn) => fn(acc), val);
};
export const filtered = (val) => (fns) => {
    return fns.every(fn => fn(val));
};
