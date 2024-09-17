import type { ChangeEvent } from "react";
import * as React from "react";

import { consoleLog } from "src/console/log";
import { consoleWarn } from "src/console/warn";

import { InputBox } from "./InputBox/InputBox";
import { SearchBox } from "./SearchBox/SearchBox";

export function Entities() {
    return (
        <>
            <div>
                <InputBox placeholder="INPUT" onChange={onChange} onEnter={onEnter} />
            </div>
            <hr></hr>
            <div>
                <SearchBox placeholder="Search movies" onChange={onChange} onEnter={onEnter} />
            </div>
            <hr></hr>
        </>
    );

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        consoleLog(e.target.value);
    }

    function onEnter(value: string) {
        consoleWarn(value);
    }
}
