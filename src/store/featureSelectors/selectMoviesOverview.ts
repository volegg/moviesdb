import { createSelector } from "@reduxjs/toolkit";

import { toMonthYear } from "src/utils/date/toMonthYear";

import { selectMoviesByPage } from "../featureSelectors/paginationSelectors";
import { selectMovieGenreMap } from "../selectors/movieGenres";

export const selectMoviesOverview = createSelector(selectMovieGenreMap, selectMoviesByPage, (genres, search) => {
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
