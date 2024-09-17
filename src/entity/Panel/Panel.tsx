import * as React from "react";

import style from "./style.pcss";

type PanelProps = {
    children: React.ReactNode;
};

export function Panel({ children }: PanelProps) {
    return (
        <div className={style.root}>
            <div className={style.root2nd}>{children}</div>
        </div>
    );
}
