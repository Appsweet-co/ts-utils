import { nil } from '../nil';
const Maybe = {
    of: (value) => ({
        emit: () => value,
        map: (fn) => {
            return (nil(value)) ? Maybe.of() : Maybe.of(fn(value));
        }
    })
};
export { Maybe };
