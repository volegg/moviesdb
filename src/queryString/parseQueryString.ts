import { PageSize, SortPerPage, View } from "src/const/pagination";

const defaultParams: QueryParams = {
    devMode: 0,
    page: 0,
    title: "",
    view: View.list,
    pageSize: PageSize.ten,
    sort: SortPerPage.none,
};

export const queryParam: Readonly<QueryParams> = ((queryString) => {
    const urlParams = new URLSearchParams(queryString);

    assignNumber(defaultParams, "devMode");
    assignNumber(defaultParams, "page", (x) => {
        return x > 0;
    });
    assignNumber(defaultParams, "pageSize", (x) => {
        return [4, 5, 10, 20].includes(x);
    });
    assignNumber(defaultParams, "view", (x) => {
        return [1, 2].includes(x);
    });
    assignNumber(defaultParams, "sort", (x) => {
        return [0, 1, 2].includes(x);
    });

    const title = (urlParams.get("title") || "").trim().replace(/\s+/g, " ");

    if (title) {
        defaultParams.title = title;
    }

    return defaultParams;

    function assignNumber(queryParams: QueryParams, prop: keyof QueryParams, condition = (x: number) => x === x) {
        const n = parseInt(urlParams.get(prop) ?? "", 10);

        if (!isNaN(n) && condition(n)) {
            Object.assign(queryParams, { [prop]: n });
        }
    }
})(window.location.search);
