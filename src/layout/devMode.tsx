import * as React from "react";

import { Entities } from "src/entity/EntitiesDev/entities";

import { createApp } from "./createApp";
import style from "./style.pcss";

export function render(transport: ITransport) {
    createApp(<Layout />, transport);
}

function Layout() {
    return (
        <div className={style.app}>
            <Entities />
        </div>
    );
}
