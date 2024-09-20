import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { Notification } from "src/const/notification";

function getInitialState(): NotificationState {
    return { queue: [] };
}

export const notificationSlice = createSlice({
    name: "notification",
    initialState: getInitialState(),
    reducers: {
        add(state, { payload }: PayloadAction<string>) {
            add(state, {
                type: Notification.any,
                payload,
            });
        },
        remove(state, { payload }: PayloadAction<Notification>) {
            if (state.queue.length && state.queue[0].type === payload) {
                state.queue = state.queue.splice(1);
            }
        },
    },
});

export const notificationReducer = notificationSlice.reducer;

function add(state: NotificationState, item: NotificationItem) {
    if (state.queue.length) {
        const { payload } = state.queue[state.queue.length - 1];

        if (payload !== item.payload) {
            state.queue.push(item);
        }
    } else {
        state.queue.push(item);
    }
}
