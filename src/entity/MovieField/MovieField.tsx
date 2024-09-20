import * as React from "react";
import { ReactNode } from "react";

import style from "./style.pcss";

type MovieFieldProps = {
    label: string;
    info?: string | number;
    children?: ReactNode;
};

export function MovieField({ label, info, children }: MovieFieldProps) {
    if (!info) {
        return null;
    }

    return (
        <div>
            <span className={style.label}>{label}:</span>
            {info ? <span className={style.info}>{info}</span> : null}
            {children ? children : null}
        </div>
    );
}
