import { createSelector } from "@reduxjs/toolkit";

import { MovieDB } from "src/const/moviedb";

import {
    selectPage,
    selectPageSize,
    selectSearchMovies,
    selectTotalPages,
    selectUserPage,
} from "../selectors/searchMovies";

const step = 5;

export const selectCurrentPage = createSelector(selectUserPage, selectPage, (userPage, page) => {
    return userPage + page;
});

export const selectCurrentTotalPage = createSelector(selectTotalPages, selectPageSize, (totalPages, pageSize) => {
    return (totalPages * MovieDB.pageSize) / pageSize;
});

export const selectNeedNext = createSelector(selectPageSize, selectUserPage, selectPage, (pageSize, userPage, page) => {
    const ratio = MovieDB.pageSize / pageSize;
    const actualPage = (userPage / ratio) >> 0;

    return actualPage !== page;
});

export const selectUserPages = createSelector(selectCurrentTotalPage, selectPage, (totalPages, page) => {
    const pages = [];

    let startFrom = page;

    if (totalPages - step < page) {
        startFrom = totalPages - step;
    } else if (page <= step) {
        startFrom = 1;
    } else {
        startFrom = page - (step >> 1);
    }

    for (let i = startFrom; i < startFrom + step; i++) {
        pages.push(i);
    }

    return pages;
});

export const selectMoviesByPage = createSelector(
    selectPageSize,
    selectUserPage,
    selectSearchMovies,
    (pageSize, userPage, movies) => {
        return movies.slice(userPage, pageSize);
    },
);
