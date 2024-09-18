import * as React from "react";

import { Button } from "src/entity/Button/Button";
import { SearchBox } from "src/entity/SearchBox/SearchBox";
import { getTransport } from "src/store/transport";

import style from "./style.pcss";

export function Search() {
    return (
        <div className={style.root}>
            <SearchBox placeholder="Search movies" onEnter={onEnter} />
            <Button onClick={onClick}>Search</Button>
        </div>
    );

    function onClick() {
        getTransport().searchMovieApi("test");
    }

    function onEnter(name: string) {
        getTransport().searchMovieApi(name);
    }
}
