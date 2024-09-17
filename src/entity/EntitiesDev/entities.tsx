import type { ChangeEvent } from "react";
import * as React from "react";

import { consoleLog } from "src/console/log";
import { consoleWarn } from "src/console/warn";

import { Button } from "../Button/Button";
import { InputBox } from "../InputBox/InputBox";
import { Panel } from "../Panel/Panel";
import { SearchBox } from "../SearchBox/SearchBox";

import style from "./style.pcss";

export function Entities() {
    return (
        <div className={style.root}>
            <div>
                <InputBox placeholder="INPUT" onChange={onChange} onEnter={onEnter} />
            </div>
            <hr></hr>
            <div>
                <SearchBox placeholder="Search movies" onChange={onChange} onEnter={onEnter} />
            </div>
            <hr></hr>
            <div>
                <Button onClick={onClick}>Primary Button</Button>
            </div>
            <hr></hr>
            <div>
                <Panel>
                    <div className={style.search}>
                        <SearchBox placeholder="Search movies" onChange={onChange} onEnter={onEnter} />
                        <Button onClick={onClick}>Search</Button>
                    </div>
                </Panel>
            </div>
        </div>
    );

    function onClick() {
        consoleLog("Button clicked");
    }

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        consoleLog(e.target.value);
    }

    function onEnter(value: string) {
        consoleWarn(value);
    }
}
