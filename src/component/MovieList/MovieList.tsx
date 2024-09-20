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
import { openMovieTab } from "src/utils/openMovieTab";

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
                {movies.map(({ genres, ...props }) => {
                    const genre = genres.split(",")[0];

                    return (
                        <Poster onClick={onClick} genre={genre} key={props.id} {...props} width={220} height={330} />
                    );
                })}
            </div>
        );
    }

    return (
        <>
            {movies.map((props) => {
                return <MovieItem onClick={onClick} key={props.id} {...props} />;
            })}
        </>
    );

    function onClick(id: number) {
        openMovieTab(id);
    }
}
