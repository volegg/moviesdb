export const updateQueryParam = (() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    return <TProp extends keyof QueryParams>(prop: TProp, value: QueryParams[TProp]) => {
        params.set(prop, value.toString());
        url.search = params.toString();
        window.history.pushState({}, "", url);
    };
})();
