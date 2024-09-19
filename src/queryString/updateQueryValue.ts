export const updateQueryParam = (() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    return <TProp extends keyof QueryParams>(prop: TProp, value: QueryParams[TProp]) => {
        const val = value.toString();

        if (val) {
            params.set(prop, val);
        } else {
            params.delete(prop);
        }

        url.search = params.toString();
        window.history.pushState({}, "", url);
    };
})();
