const defaultParams: QueryParams = {
    devMode: false,
    page: 0,
    title: "",
};

export const queryParam: Readonly<QueryParams> = ((queryString) => {
    const urlParams = new URLSearchParams(queryString);

    const isDevMode = parseInt(urlParams.get("devMode") ?? "0", 10) === 1;

    if (isDevMode) {
        defaultParams.devMode = isDevMode;
    }

    const page = parseInt(urlParams.get("page") ?? "1", 10);

    if (!isNaN(page)) {
        defaultParams.page = page;
    }

    const title = (urlParams.get("title") || "").trim().replace(/\s+/g, " ");

    if (title) {
        defaultParams.title = title;
    }

    return defaultParams;
})(window.location.search);
