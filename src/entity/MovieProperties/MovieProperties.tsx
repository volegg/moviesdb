import * as React from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MovieField } from "../MovieField/MovieField";

export function MovieProperties(movie: ServerFullMovieDescription) {
    const releaseDate = new Date(movie.release_date).toDateString().substring(4);
    const genres = movie.genres.map(({ name }) => name).join(", ");
    const budget = movie.budget ? "€ " + movie.budget.toLocaleString() : undefined;

    return (
        <>
            {movie.homepage ? (
                <a href={movie.homepage} target="_black">
                    Visit homepage&nbsp;
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            ) : null}
            <MovieField label="Rating" info={movie.vote_average} />
            <MovieField label="Release date" info={releaseDate} />
            <MovieField label="Genres" info={genres} />
            <MovieField label="Language" info={movie.original_language} />
            <MovieField label="Countries" info={movie.origin_country.join(", ")} />
            <MovieField
                label="Production"
                info={movie.production_companies
                    .map(({ name, origin_country }) => `${name} (${origin_country})`)
                    .join(", ")}
            />
            <MovieField label="Budget" info={budget} />
        </>
    );
}
