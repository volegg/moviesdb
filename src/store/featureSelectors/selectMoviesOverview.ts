import { createSelector } from "@reduxjs/toolkit";

import { toMonthYear } from "src/utils/date/toMonthYear";

import { selectMovieGenreMap } from "../selectors/movieGenres";
import { selectSearchMovies } from "../selectors/searchMovies";

export const selectMoviesOverview = createSelector(selectMovieGenreMap, selectSearchMovies, (genres, search) => {
    const movies = search.map((movie) => {
        return {
            ...movie,
            date: toMonthYear(movie.date),
            genres: movie.genreIds
                .map((id) => {
                    return genres[id];
                })
                .join(",  "),
        };
    });

    return movies;
});
