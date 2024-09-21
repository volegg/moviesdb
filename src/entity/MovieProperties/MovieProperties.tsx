import * as React from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getCountryName } from "src/utils/country";
import { getLangName } from "src/utils/language";

import { MovieField } from "../MovieField/MovieField";

export function MovieProperties(movie: ServerFullMovieDescription) {
    const releaseDate = new Date(movie.release_date).toDateString().substring(4);
    const genres = movie.genres.map(({ name }) => name).join(", ");
    const budget = movie.budget ? "€ " + movie.budget.toLocaleString() : undefined;
    const language = getLangName(movie.original_language);
    const countries = movie.origin_country.map(getCountryName).join(", ");
    const duration = ((movie.runtime / 60) >> 0) + "h " + (movie.runtime % 60) + "m";

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
            <MovieField label="Language" info={language} />
            <MovieField label="Duration" info={duration} />
            <MovieField label="Countries" info={countries} />
            <MovieField
                label="Production"
                info={movie.production_companies
                    .map(({ name, origin_country }) => `${name} ${origin_country ? "(" + origin_country + ")" : ""}`)
                    .join(", ")}
            />
            <MovieField label="Budget" info={budget} />
        </>
    );
}
