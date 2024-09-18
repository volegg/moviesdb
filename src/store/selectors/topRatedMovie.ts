import { createSelector } from "@reduxjs/toolkit";

import type { State } from "../store";

function getState(state: State) {
    return state.movieTopRatedReducer;
}

export const selectTopRatedMovies = createSelector(getState, (state) => {
    return state.list;
});
