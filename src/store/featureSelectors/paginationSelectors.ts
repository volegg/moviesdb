import { createSelector } from "@reduxjs/toolkit";

import { selectPageSize, selectSearchMovies, selectTotalPages, selectUserPage } from "../selectors/searchMovies";

const step = 5;

export const selectUserPages = createSelector(selectTotalPages, selectUserPage, (totalPages, page) => {
    const pages = [];

    let startFrom = page;

    if (totalPages <= page + (step >> 1)) {
        startFrom = totalPages - step + 1;
    } else if (page <= step >> 1) {
        startFrom = 1;
    } else {
        startFrom = page - (step >> 1);
    }

    for (let i = startFrom; i < startFrom + step; i++) {
        pages.push(i);
    }

    return pages;
});

export const selectMoviesByPage = createSelector(selectPageSize, selectSearchMovies, (pageSize, movies) => {
    return movies.slice(0, pageSize);
});
