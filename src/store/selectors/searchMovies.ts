import { createSelector } from "@reduxjs/toolkit";

import type { State } from "../store";

function getState(state: State) {
    return state.movieSearchReducer;
}

export const selectSearchMovies = createSelector(getState, (state) => {
    return state.list;
});

export const selectPage = createSelector(getState, (state) => {
    return state.page;
});

export const selectTotalPages = createSelector(getState, (state) => {
    return state.totalPages;
});

export const selectPending = createSelector(getState, (state) => {
    return state.pending;
});
