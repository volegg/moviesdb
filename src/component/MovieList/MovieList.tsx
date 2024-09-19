import * as React from "react";

import { MovieItem } from "src/entity/MovieItem/MovieItem";
import { selectMoviesOverview } from "src/store/featureSelectors/selectMoviesOverview";
import { useSelector } from "src/store/hooks";
import { selectTotalPages } from "src/store/selectors/searchMovies";

import style from "./style.pcss";

export function MovieList() {
    const movies = useSelector(selectMoviesOverview);
    const totalPages = useSelector(selectTotalPages);

    if (movies.length < 1) {
        return <div className={style.noMovies}>No movies. Max page is {totalPages}</div>;
    }

    return (
        <>
            {movies.map((props, i) => {
                return <MovieItem key={props.title + i} {...props} />;
            })}
        </>
    );
}
