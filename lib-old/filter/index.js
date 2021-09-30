const filter = (...fns) => (init) => fns.reduce((acc, fn) => acc.filter(fn), init);
export { filter };
