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

    if (queryParam.devMode) {
        deferred = import(/* webpackChunkName: "devMode" */ "src/layout/devMode");
    } else {
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
    }

    return deferred.then((layout) => {
        return Promise.resolve(layout);
    });
}

function loadTransport() {
    return import(/* webpackChunkName: "transport" */ "src/transport/transport");
}
