import { notificationSlice } from "./reducers/notifications";
import type { Dispatch } from "./store";

export function createErrorHandler(dispatch: Dispatch): ApiErrorCallback {
    return (err, endpoint) => {
        dispatch(notificationSlice.actions.add(`Error: ${endpoint}\n${err.toString()}`));
    };
}
