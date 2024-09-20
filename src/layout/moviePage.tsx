import * as React from "react";
import { createRoot } from "react-dom/client";

import { MoviePage } from "src/component/MoviePage/MoviePage";
import { queryParam } from "src/queryString/parseQueryString";
import { getComputedStyle } from "src/utils/dom/computedProperty";

import style from "./desktop.pcss";

export function render(transport: ITransport) {
    transport.setApiKey(queryParam.apiKey);

    const rootNode = document.createElement("div");

    rootNode.id = "root";

    const root = createRoot(rootNode);

    transport.fetchMovieById(queryParam.showMovie).then((movie) => {
        root.render(
            <React.StrictMode>
                <div className={style.app}>
                    <MoviePage movie={movie} />
                </div>
            </React.StrictMode>,
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
    });
}
