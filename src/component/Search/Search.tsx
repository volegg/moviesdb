import * as React from "react";

import { SearchBox } from "src/entity/SearchBox/SearchBox";
import { getTransport } from "src/store/transport";

export function Search() {
    return <SearchBox placeholder="Search movies" onEnter={onEnter} />;

    function onEnter(name: string) {
        getTransport().searchMovieApi(name);
    }
}
