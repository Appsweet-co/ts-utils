declare const Maybe: {
    of: (value?: unknown) => {
        emit: () => unknown;
        map: (fn: (arg: any) => any) => any;
    };
};
export { Maybe };
