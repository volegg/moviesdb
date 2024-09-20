import * as React from "react";
import cn from "classnames";

import { selectHasMovies } from "src/store/featureSelectors/paginationSelectors";
import { useSelector } from "src/store/hooks";
import { selectPending } from "src/store/selectors/searchMovies";

import { MovieList } from "../MovieList/MovieList";
import { SelectPage } from "../SelectPage/SelectPage";
import { Settings } from "../Settings/Settings";

import style from "./style.pcss";

export function PageContainer() {
    const searchPending = useSelector(selectPending);
    const hasMovies = useSelector(selectHasMovies);

    if (!hasMovies) {
        return null;
    }

    return (
        <div className={style.root}>
            <div>
                <Settings />
            </div>
            <SelectPage />
            <div className={cn(style.movies, searchPending ? style.loading : "")}>
                <MovieList />
            </div>
            <SelectPage />
        </div>
    );
}
