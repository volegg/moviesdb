import { createSelector } from "@reduxjs/toolkit";

import type { State } from "../store";

function getState(state: State) {
    return state.uiReducer;
}

export const selectLayoutName = createSelector(getState, (uiState) => {
    return uiState.layoutName;
});
