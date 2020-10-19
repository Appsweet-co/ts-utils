import { nil } from '../nil';
import { filtered, reduced } from './service';
const Maybe = (val) => ({
    value: () => val,
    else: (fallback) => nil(val) ? Maybe(fallback) : Maybe(val),
    chain: (fn) => nil(val) ? Maybe() : fn(val),
    map: (...fns) => {
        if (nil(val)) {
            return Maybe();
        }
        else {
            const r = reduced(val);
            return Maybe(r(fns));
        }
    },
    pipe: (...fns) => {
        if (nil(val)) {
            return Maybe();
        }
        else {
            const r = reduced(val);
            r(fns);
            return Maybe(val);
        }
    },
    filter: (...fns) => {
        const f = filtered(val);
        return nil(val) ? Maybe() : f(fns) ? Maybe(val) : Maybe();
    }
});
export { Maybe };
