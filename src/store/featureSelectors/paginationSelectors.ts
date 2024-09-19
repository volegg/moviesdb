import { createSelector } from "@reduxjs/toolkit";

import { MovieDB } from "src/const/moviedb";
import { PageNumbersCount } from "src/const/pagination";

import { selectPageSize, selectSearchMovies, selectTotalPages, selectUserPage } from "../selectors/searchMovies";

export const selectUserPages = createSelector(selectTotalPages, selectUserPage, (totalPages, page) => {
    const pages = [];
    const step = PageNumbersCount.default;
    const avg = step >> 1;

    let startFrom = page;

    if (totalPages <= page + avg) {
        startFrom = totalPages - step + 1;
    } else if (page <= avg) {
        startFrom = 1;
    } else {
        startFrom = page - avg;
    }

    const end = startFrom + step;

    for (let i = startFrom; i < end; i++) {
        pages.push(i);
    }

    return pages;
});

export const selectMoviesByPage = createSelector(
    selectUserPage,
    selectPageSize,
    selectSearchMovies,
    (userPage, pageSize, movies) => {
        const frame = (MovieDB.pageSize / pageSize) >> 0;
        const startIndex = ((userPage - 1) % frame) * pageSize;

        return movies.slice(startIndex, startIndex + pageSize);
    },
);
