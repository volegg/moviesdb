import * as React from "react";
import cn from "classnames";

import style from "./style.pcss";

type PanelProps = {
    hidden?: boolean;
    title?: string;
    children: React.ReactNode;
};

export function Panel({ title, children, hidden }: PanelProps) {
    return (
        <div className={cn(style.root, typeof hidden === "boolean" ? (hidden ? style.hidden : "") : "")}>
            {title ? <div className={style.title}>{title}</div> : null}
            {children}
        </div>
    );
}
