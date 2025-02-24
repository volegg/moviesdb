import { createSelector } from "@reduxjs/toolkit";

import { MovieDB } from "src/const/moviedb";
import { SortPerPage } from "src/const/pagination";

import { selectSearchMovies, selectTotalMovies, selectUserPage } from "../selectors/searchMovies";
import { selectPageSize, selectSortPerPage } from "../selectors/settings";

export const selectTotalPages = createSelector(selectPageSize, selectTotalMovies, (pageSize, totalMovies) => {
    if (totalMovies === 0) {
        return 0;
    }

    if (totalMovies <= pageSize) {
        return 1;
    }

    return ((totalMovies / pageSize) >> 0) + 1;
});

export const selectHasMovies = createSelector(selectTotalPages, (totalPages) => {
    return totalPages > 0;
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
    selectCurrentUserPage,
    selectPageSize,
    selectSearchMovies,
    selectSortPerPage,
    (userPage, pageSize, movies, needSort) => {
        const frame = (MovieDB.pageSize / pageSize) >> 0;
        const startIndex = ((userPage - 1) % frame) * pageSize;

        const result = movies.slice(startIndex, startIndex + pageSize);

        let sortLogic;

        if (needSort) {
            if (needSort === SortPerPage.byRank) {
                sortLogic = ratingSort;
            }

            if (needSort === SortPerPage.byTitle) {
                sortLogic = titleSort;
            }

            if (needSort === SortPerPage.byRelease) {
                sortLogic = releaseSort;
            }
        }

        return sortLogic ? result.sort(sortLogic) : result;
    },
);

function titleSort(a: Movie, b: Movie) {
    return a.title.localeCompare(b.title);
}

function releaseSort(a: Movie, b: Movie) {
    const x = new Date(a.date).getTime();
    const y = new Date(b.date).getTime();

    return y - x;
}

function ratingSort(a: Movie, b: Movie) {
    return b.rating - a.rating;
}
