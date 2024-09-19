import * as React from "react";

import { MovieItem } from "src/entity/MovieItem/MovieItem";
import { selectMoviesOverview } from "src/store/featureSelectors/selectMoviesOverview";
import { useSelector } from "src/store/hooks";

export function MovieList() {
    const movies = useSelector(selectMoviesOverview);

    return (
        <>
            {movies.map((props, i) => {
                return <MovieItem key={props.title + i} {...props} />;
            })}
        </>
    );
}
