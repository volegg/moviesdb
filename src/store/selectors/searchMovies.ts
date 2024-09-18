import { createSelector } from "@reduxjs/toolkit";

import type { State } from "../store";

function getState(state: State) {
    return state.movieSearchReducer;
}

export const selectMovies = createSelector(getState, (state) => {
    return state.list;
});

export const selectPage = createSelector(getState, (state) => {
    return state.page;
});
