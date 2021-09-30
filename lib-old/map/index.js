const map = (...fns) => (init) => fns.reduce((acc, fn) => acc.map(fn), init);
export { map };
