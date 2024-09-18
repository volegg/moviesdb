import * as React from "react";

import { MoviePopular } from "src/component/MoviePopular/MoviePopular";
import { Search } from "src/component/Search/Search";

import { createApp } from "./createApp";
import style from "./style.pcss";

export function render(transport: ITransport) {
    createApp(<Layout />, transport);
}

function Layout() {
    return (
        <div className={style.app}>
            <Search />
            <MoviePopular />
        </div>
    );
}
