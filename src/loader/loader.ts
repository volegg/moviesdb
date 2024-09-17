import { consoleError } from "src/console/error";
import { isPhone, isTablet } from "src/deviceType/deviceType";

const domLoaded = "DOMContentLoaded";

export function loader() {
    const domContentLoadedDeferred: Promise<void> = new Promise((resolve) => {
        document.addEventListener(domLoaded, listener);

        function listener() {
            document.removeEventListener(domLoaded, listener);
            resolve();
        }
    });

    Promise.all([domContentLoadedDeferred, loadLayout()])
        .then((loadedData) => {
            const { render } = loadedData[1];

            render();
        })
        .catch(consoleError);
}

function loadLayout() {
    let deferred;

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

    return deferred.then((layout) => {
        return Promise.resolve(layout);
    });
}
