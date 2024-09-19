import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { searchMovieAction } from "../actions/movieSearchAction";

function getInitialState(): MovieSearchState {
    return {
        pending: false,
        page: 0,
        totalPages: 0,
        totalMovies: 0,
        list: [],
    };
}

export const movieSearchSlice = createSlice({
    name: "movieSearch",
    initialState: getInitialState(),
    reducers: {
        update(state, { payload }: PayloadAction<Omit<MovieSearchState, "pending">>) {
            state.page = payload.page;
            state.totalPages = payload.totalPages;
            state.totalMovies = payload.totalMovies;
            state.list = payload.list;
        },
    },
    extraReducers(builder) {
        builder.addCase(searchMovieAction.pending, (state) => {
            state.pending = true;
        });
        builder.addCase(searchMovieAction.fulfilled, (state) => {
            state.pending = false;
        });
    },
});

export const movieSearchReducer = movieSearchSlice.reducer;
