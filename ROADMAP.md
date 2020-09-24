# ROADMAP

- [ ] `filter = (fn, list) => list.filter(fn)`

- [ ] `modulo = (mod, val) => val % mod;` [Ramda.js](https://ramdajs.com/docs/#modulo)

- [ ] `pow = (exp, val) => Math.pow(val, exp);`

- [ ] `int = (val) => (n << 0) === n;`

- [x] `first = (n, list) => list.slice(0, n);` (b62d538)

- [x] `last = (n, list) => list.slice(neg(n));` (d0513c3)

- [x] `neg = (n) => -Math.abs(n);` (fb9be4a)

- [ ] `unzip => (fn, list) => [ filter(fn, list), filter(!fn, list) ];`

- [ ] Unit tests
