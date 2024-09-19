import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { movieGenresReducer } from "./reducers/movieGenres";
import { moviePopularReducer } from "./reducers/moviePopular";
import { movieSearchReducer } from "./reducers/movieSearch";
import { movieTopRatedReducer } from "./reducers/movieTopRated";

const reducer = combineReducers({
    moviePopularReducer,
    movieSearchReducer,
    movieTopRatedReducer,
    movieGenresReducer,
});

export function setupStore() {
    return configureStore({ reducer });
}

export type State = ReturnType<typeof reducer>;
export type Store = ReturnType<typeof setupStore>;
export type Dispatch = Store["dispatch"];
