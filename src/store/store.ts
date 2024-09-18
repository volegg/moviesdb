import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { moviePopularReducer } from "./reducers/moviePopular";
import { movieSearchReducer } from "./reducers/movieSearch";
import { movieTopRatedReducer } from "./reducers/movieTopRated";

const reducer = combineReducers({
    moviePopularReducer,
    movieSearchReducer,
    movieTopRatedReducer,
});

export function setupStore() {
    return configureStore({ reducer });
}

export type State = ReturnType<typeof reducer>;
export type Store = ReturnType<typeof setupStore>;
export type Dispatch = Store["dispatch"];
