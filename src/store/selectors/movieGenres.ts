import { createSelector } from "@reduxjs/toolkit";

import type { State } from "../store";

function getState(state: State) {
    return state.movieGenresReducer;
}

const selectGenreIds = createSelector(getState, (state) => {
    return state.list;
});

export const selectMovieGenreMap = createSelector(selectGenreIds, (genres) => {
    const genreMap = genres.reduce((acc, { id, name }) => {
        acc[id] = name;

        return acc;
    }, {} as Record<number, string>);

    return genreMap;
});
