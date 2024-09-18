import { createSelector } from "@reduxjs/toolkit";

import type { State } from "../store";

function getState(state: State) {
    return state.moviePopularReducer;
}

export const selectPopularMovies = createSelector(getState, (state) => {
    return state.list;
});
