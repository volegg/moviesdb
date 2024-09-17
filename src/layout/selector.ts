import { createSelector } from "@reduxjs/toolkit";

import { State } from "src/store/store";

function getState(state: State) {
    return state.uiReducer;
}

export const selectLayoutName = createSelector(getState, (uiState) => {
    return uiState.layoutName;
});
