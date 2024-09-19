import * as React from "react";
import { useEffect, useState } from "react";

import { View } from "src/const/pagination";
import { MovieItem } from "src/entity/MovieItem/MovieItem";
import { Panel } from "src/entity/Panel/Panel";
import { Poster } from "src/entity/Poster/Poster";
import { selectTotalPages } from "src/store/featureSelectors/paginationSelectors";
import { selectMoviesOverview } from "src/store/featureSelectors/selectMoviesOverview";
import { useSelector } from "src/store/hooks";
import { selectPending } from "src/store/selectors/searchMovies";
import { selectView } from "src/store/selectors/settings";

import style from "./style.pcss";

export function MovieList() {
    const loadedMovies = useSelector(selectMoviesOverview);
    const totalPages = useSelector(selectTotalPages);
    const pending = useSelector(selectPending);
    const view = useSelector(selectView);

    const [noMovies, setNoMovies] = useState(false);
    const [movies, setMovies] = useState(loadedMovies);

    useEffect(() => {
        if (!pending) {
            setMovies(() => loadedMovies);
            setNoMovies(() => loadedMovies.length < 1);
        }
    }, [pending, loadedMovies]);

    if (noMovies) {
        return (
            <Panel>
                <div className={style.noMovies}>No movies. Max page is {totalPages}</div>
            </Panel>
        );
    }

    if (view === View.tile) {
        return (
            <div className={style.tile}>
                {movies.map(({ genres, ...props }, i) => {
                    const genre = genres.split(",")[0];

                    return <Poster genre={genre} key={props.title + i} {...props} width={220} height={330} />;
                })}
            </div>
        );
    }

    return (
        <>
            {movies.map((props, i) => {
                return <MovieItem key={props.title + i} {...props} />;
            })}
        </>
    );
}
