import { createSelector } from "@reduxjs/toolkit";

import type { State } from "../store";

function getState(state: State) {
    return state.notificationReducer;
}
const selectQueue = createSelector(getState, (state) => {
    return state.queue;
});

export const selectNotification = createSelector(selectQueue, (queue) => {
    if (queue.length) {
        return queue[0];
    }

    return;
});
