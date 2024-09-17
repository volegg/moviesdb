import * as React from "react";

import style from "./style.pcss";

type ButtonProps = {
    onClick(): void;
    children: React.ReactNode;
};

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button className={style.root} type="button" {...props}>
            {children}
        </button>
    );
}
