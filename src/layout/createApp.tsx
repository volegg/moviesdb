import * as React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { setupStore } from "src/store/store";
import { getComputedStyle } from "src/utils/dom/computedProperty";

export function createApp(Layout: JSX.Element) {
    const rootNode = document.createElement("div");

    rootNode.id = "root";

    const store = setupStore();
    const root = createRoot(rootNode);

    root.render(
        <Provider store={store}>
            <React.StrictMode>{Layout}</React.StrictMode>
        </Provider>,
    );

    document.body.appendChild(rootNode);

    const loadScreenNode = document.getElementById("lt");

    if (loadScreenNode) {
        const cssStyle = getComputedStyle(loadScreenNode);
        const duration = parseFloat(cssStyle?.transitionDuration ?? "0.25") * 1000;

        loadScreenNode.style.opacity = "0";

        window.setTimeout(() => {
            loadScreenNode.remove();
        }, duration + 10);
    }
}
