import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { uiReducer } from "./reducers/ui";

const reducer = combineReducers({
    uiReducer,
});

export function setupStore() {
    return configureStore({ reducer });
}

export type State = ReturnType<typeof reducer>;
export type Store = ReturnType<typeof setupStore>;
export type Dispatch = Store["dispatch"];
