import * as React from "react";

import { HeaderComponent } from "src/component/Header";
import { useDispatch } from "src/store/hooks";
import { uiSlice } from "src/store/reducers/ui";

import { createApp } from "./createApp";
import style from "./style.pcss";

export function render() {
    createApp(<Layout />);
}

function Layout() {
    useDispatch()(uiSlice.actions.setLayoutName("phone"));

    return (
        <div className={style.app}>
            <HeaderComponent />
        </div>
    );
}
