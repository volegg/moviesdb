import * as React from "react";

import { MovieOverview } from "src/entity/MovieOverview/MovieOverview";
import { MovieProperties } from "src/entity/MovieProperties/MovieProperties";
import { getPosterUrl } from "src/utils/adapters/posterUrl";

import style from "./style.pcss";

type MoviePageProps = {
    movie: ServerFullMovieDescription;
};

export function MoviePage({ movie }: MoviePageProps) {
    const title = movie.title === movie.original_title ? movie.title : movie.title + " (" + movie.original_title + ")";

    return (
        <div>
            <div className={style.root}>
                <h1>{title}</h1>
                <div className={style.poster} style={{ backgroundImage: `url(${getPosterUrl(movie)})` }}></div>
                {movie.tagline ? <h3>{movie.tagline}</h3> : ""}
            </div>
            <MovieProperties {...movie} />
            <MovieOverview {...movie} />
        </div>
    );
}
