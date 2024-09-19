import { createSelector } from "@reduxjs/toolkit";

import { MovieDB } from "src/const/moviedb";

import { selectSearchMovies, selectTotalMovies, selectUserPage } from "../selectors/searchMovies";
import { selectPageSize } from "../selectors/settings";

export const selectTotalPages = createSelector(selectPageSize, selectTotalMovies, (pageSize, totalMovies) => {
    return ((totalMovies / pageSize) >> 0) + 1;
});

export const selectCurrentUserPage = createSelector(selectTotalPages, selectUserPage, (totalPages, userPage) => {
    return userPage > totalPages ? totalPages : userPage;
});

export const selectUserPages = createSelector(selectTotalPages, selectUserPage, (totalPages, page) => {
    const pages = [page - 40, page - 20, page, page + 20, page + 40];

    if (page < 6) {
        return Array(totalPages < 6 ? totalPages : 5)
            .fill(2)
            .map((_, i) => {
                return i + 1;
            });
    }

    if (page > totalPages - 5) {
        return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    if (pages[0] < 1) {
        pages[0] = 1;
    }

    if (pages[1] < 2) {
        pages[1] = (page * 0.5) >> 0;
    }

    if (pages[3] > totalPages) {
        pages[3] = page + (((totalPages - page) * 0.5) >> 0);
    }

    if (pages[4] > totalPages) {
        pages[4] = totalPages;
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
