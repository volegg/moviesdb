import type { ReactNode } from "react";
import * as React from "react";
import cn from "classnames";

import { selectHasMovies } from "src/store/featureSelectors/paginationSelectors";
import { useSelector } from "src/store/hooks";
import { selectPending } from "src/store/selectors/searchMovies";

import { MovieList } from "../MovieList/MovieList";
import { Settings } from "../Settings/Settings";

import style from "./style.pcss";

type PageContainerProps = {
    SelectPage: ({ order }: { order?: 0 | 1 }) => ReactNode;
};

export function PageContainer({ SelectPage }: PageContainerProps) {
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
            <SelectPage order={1} />
        </div>
    );
}
