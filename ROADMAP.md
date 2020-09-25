# ROADMAP

- [x] `filter = (fn, list) => list.filter(fn)` (6facafd)

- [ ] `modulo = (mod, val) => val % mod;` [Ramda.js](https://ramdajs.com/docs/#modulo)

- [ ] `pow = (exp, val) => Math.pow(val, exp);`

- [ ] `int = (val) => (n << 0) === n;`

- [x] `first = (n, list) => list.slice(0, n);` (b62d538)

- [x] `last = (n, list) => list.slice(neg(n));` (d0513c3)

- [x] `neg = (n) => -Math.abs(n);` (fb9be4a)

- [x] `unzip = (fn, list) => [ filter(fn, list), filter(v => !fn(v), list) ];` (173a915)

- [ ] Unit tests

- [ ] `debounce = (delay, immediate, fn) => { /* ... */ };` [Pareto.js](https://github.com/concretesolutions/pareto.js/#debounce) | [David Walsh](https://davidwalsh.name/javascript-debounce-function) | [Juan Vega](https://www.freecodecamp.org/news/debounce-explained-how-to-make-your-javascript-wait-for-your-user-to-finish-typing-2/)

- [ ] `timeout = (delay, fn) => (fn) ? setTimeout(fn, delay) : curry(timeout, delay)`

- [ ] Add philosophy to README
