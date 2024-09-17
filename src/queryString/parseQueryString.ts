const defaultParams: QueryParams = {
    devMode: false,
};

export const queryParam: Readonly<QueryParams> = ((queryString) => {
    const urlParams = new URLSearchParams(queryString);

    const isDevMode = parseInt(urlParams.get("devMode") ?? "0", 10) === 1;

    if (isDevMode) {
        defaultParams.devMode = isDevMode;
    }

    return defaultParams;
})(window.location.search);
