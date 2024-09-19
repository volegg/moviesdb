import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { fetchMoviePopularAction } from "../actions/moviePopularAction";

function getInitialState(): MoviePopularState {
    return {
        pending: false,
        list: [],
    };
}

export const moviePopularSlice = createSlice({
    name: "moviePopular",
    initialState: getInitialState(),
    reducers: {
        update(state, { payload }: PayloadAction<Movie[]>) {
            state.list = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchMoviePopularAction.pending, (state) => {
            state.pending = true;
        });
        builder.addCase(fetchMoviePopularAction.fulfilled, (state) => {
            state.pending = false;
        });
    },
});

export const moviePopularReducer = moviePopularSlice.reducer;
