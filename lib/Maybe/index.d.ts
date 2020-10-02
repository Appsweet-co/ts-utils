declare const Maybe: {
    of: (value?: unknown) => {
        get: () => unknown;
        getOrElse: (fallback: any) => any;
        map: (fn: (arg: any) => any) => any;
    };
};
export { Maybe };
