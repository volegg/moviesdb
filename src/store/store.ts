import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { moviePopularReducer } from "./reducers/moviePopular";

const reducer = combineReducers({
    moviePopularReducer,
});

export function setupStore() {
    return configureStore({ reducer });
}

export type State = ReturnType<typeof reducer>;
export type Store = ReturnType<typeof setupStore>;
export type Dispatch = Store["dispatch"];
