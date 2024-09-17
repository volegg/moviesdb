import type { ChangeEvent } from "react";
import * as React from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";

import style from "./style.pcss";

export type InputBoxProps = {
    icon?: IconProp;
    type?: string;
    value?: string;
    placeholder?: string;
    onChange?(e: ChangeEvent<HTMLInputElement>): void;
    onEnter?(value?: string): void;
};

export function InputBox({ onEnter, ...props }: InputBoxProps) {
    return (
        <div className={style.root}>
            {props.icon ? <FontAwesomeIcon icon={props.icon} className={style.color} /> : null}
            <input
                className={cn(style.input, style.color)}
                {...props}
                onKeyDown={(e) => {
                    if (onEnter && ["NumpadEnter", "Enter"].includes(e.key)) {
                        onEnter(e.currentTarget.value);
                    }
                }}
            />
        </div>
    );
}
