import * as React from "react";

import { Popular20 } from "src/component/Popular20/Popular20";
import { Search } from "src/component/Search/Search";
import { Top20 } from "src/component/Top20/Top20";

import { createApp } from "./createApp";
import style from "./style.pcss";

export function render(transport: ITransport) {
    createApp(<Layout />, transport);
}

function Layout() {
    return (
        <div className={style.app}>
            <Search />
            <Popular20 />
            <Top20 />
        </div>
    );
}
