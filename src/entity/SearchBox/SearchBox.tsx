import * as React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { InputBox, InputBoxProps } from "../InputBox/InputBox";

import style from "./style.pcss";

type SearchBoxProps = InputBoxProps;

export function SearchBox({ onEnter, ...props }: SearchBoxProps) {
    return (
        <div className={style.root}>
            <InputBox
                value={props.value}
                icon={props.icon ?? faSearch}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onEnter={onEnter}
            />
        </div>
    );
}
