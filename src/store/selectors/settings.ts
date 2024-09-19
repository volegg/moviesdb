import { createSelector } from "@reduxjs/toolkit";

import type { State } from "../store";

function getState(state: State) {
    return state.settingsReducer;
}

export const selectPageSize = createSelector(getState, (state) => {
    return state.pageSize;
});

export const selectView = createSelector(getState, (state) => {
    return state.view;
});

export const selectSortPerPage = createSelector(getState, (state) => {
    return state.sortPerPage;
});
