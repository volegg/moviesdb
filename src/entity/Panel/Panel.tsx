import * as React from "react";

import style from "./style.pcss";

type PanelProps = {
    title?: string;
    children: React.ReactNode;
};

export function Panel({ title, children }: PanelProps) {
    return (
        <div className={style.root}>
            {title ? <div className={style.title}>{title}</div> : null}
            {children}
        </div>
    );
}
