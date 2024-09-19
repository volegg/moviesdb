import * as React from "react";
import cn from "classnames";

import { useSelector } from "src/store/hooks";
import { selectPending, selectTotalPages } from "src/store/selectors/searchMovies";

import { MovieList } from "../MovieList/MovieList";
import { SelectPage } from "../SelectPage/SelectPage";

import style from "./style.pcss";

export function PageContainer() {
    const searchPending = useSelector(selectPending);
    const totalPages = useSelector(selectTotalPages);

    if (totalPages < 1) {
        return null;
    }

    return (
        <div className={style.root}>
            <SelectPage />
            <div className={cn(style.movies, searchPending ? style.loading : "")}>
                <MovieList />
            </div>
            <SelectPage />
        </div>
    );
}
