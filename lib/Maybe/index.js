import { nil } from '../nil';
const Maybe = {
    of: (value) => ({
        get: () => value,
        getOrElse: (fallback) => {
            return nil(value) ? fallback : value;
        },
        map: (fn) => {
            return nil(value) ? Maybe.of() : Maybe.of(fn(value));
        }
    })
};
export { Maybe };
