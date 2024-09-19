import * as React from "react";

import { useSelector } from "src/store/hooks";
import { selectPage, selectTotalPages } from "src/store/selectors/searchMovies";

import { MovieList } from "../MovieList/MovieList";

import style from "./style.pcss";

export function PageContainer() {
    const page = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);

    if (totalPages < 1) {
        return null;
    }

    return (
        <div className={style.root}>
            <div className={style.header}>
                <span>{page}</span>
                <span>{totalPages}</span>
            </div>
            <MovieList />
        </div>
    );
}
