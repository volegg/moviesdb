import { createSelector } from "@reduxjs/toolkit";

import type { State } from "../store";

function getState(state: State) {
    return state.movieSearchReducer;
}

export const selectSearchMovies = createSelector(getState, (state) => {
    return state.list;
});

export const selectMovieCount = createSelector(selectSearchMovies, (movies) => {
    return movies.length;
});

export const selectTotalPages = createSelector(getState, (state) => {
    return state.totalPages;
});

export const selectPage = createSelector(getState, (state) => {
    return state.page;
});

export const selectTotalMovies = createSelector(getState, (state) => {
    return state.totalMovies;
});

export const selectPending = createSelector(getState, (state) => {
    return state.pending;
});

export const selectUserPage = createSelector(getState, (state) => {
    return state.userPage;
});

export const selectPageSize = createSelector(getState, (state) => {
    return state.pageSize;
});

export const selectMovieTitle = createSelector(getState, (state) => {
    return state.query;
});
