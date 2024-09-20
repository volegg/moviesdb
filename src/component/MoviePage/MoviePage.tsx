import * as React from "react";

type MoviePageProps = {
    movie: ServerFullMovieDescription;
};

export function MoviePage({ movie }: MoviePageProps) {
    return (
        <div>
            <div>{movie.id}</div>
            <div>{movie.title}</div>
            <div>{movie.overview}</div>
        </div>
    );
}
