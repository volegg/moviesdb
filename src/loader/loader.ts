import { consoleError } from "src/console/error";
import { isPhone, isTablet } from "src/deviceType/deviceType";
import { queryParam } from "src/queryString/parseQueryString";

const domLoaded = "DOMContentLoaded";

export function loader() {
    const domContentLoadedDeferred: Promise<void> = new Promise((resolve) => {
        document.addEventListener(domLoaded, listener);

        function listener() {
            document.removeEventListener(domLoaded, listener);
            resolve();
        }
    });

    Promise.all([loadLayout(), loadTransport(), domContentLoadedDeferred])
        .then(([layout, { Transport }]) => {
            layout.render(new Transport());
        })
        .catch(consoleError);
}

function loadLayout() {
    let deferred;

    if (ENV.DEV) {
        if (queryParam.devMode) {
            return import(/* webpackChunkName: "devMode" */ "src/layout/devMode");
        }
    }

    if (queryParam.pageMovie) {
        if (isPhone) {
            return import(/* webpackChunkName: "pageMovieMobile" */ "src/layout/pageMovieMobile");
        }

        return import(/* webpackChunkName: "pageMovieDesktop" */ "src/layout/pageMovieDesktop");
    }

    switch (true) {
        case isPhone:
            deferred = import(/* webpackChunkName: "phone" */ "src/layout/phone");
            break;

        case isTablet:
            deferred = import(/* webpackChunkName: "tablet" */ "src/layout/tablet");
            break;

        default:
            deferred = import(/* webpackChunkName: "desktop" */ "src/layout/desktop");
    }

    return deferred;
}

function loadTransport() {
    return import(/* webpackChunkName: "transport" */ "src/transport/transport");
}
