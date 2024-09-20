import * as React from "react";

import { Notification } from "src/component/Notification/Notification";
import { PageContainer } from "src/component/PageContainer/PageContainer";
import { Search } from "src/component/Search/Search";
import { TopAndPopular } from "src/component/TopAndPopular/TopAndPopular";

import { createApp } from "./createApp";
import style from "./desktop.pcss";

export function render(transport: ITransport) {
    createApp(<Layout />, transport);
}

function Layout() {
    return (
        <div className={style.app}>
            <div>
                <Search />
                <PageContainer />
                <TopAndPopular />
            </div>
            <Notification />
        </div>
    );
}
