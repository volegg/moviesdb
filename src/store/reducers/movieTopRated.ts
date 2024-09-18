import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchMovieTopRatedAction } from "../actions/movieTopRatedAction";

function getInitialState(): MovieTopRatedState {
    return {
        pending: false,
        list: [],
    };
}

export const movieTopRatedSlice = createSlice({
    name: "movieTopRated",
    initialState: getInitialState(),
    reducers: {
        update(state, { payload }: PayloadAction<MovieTopRated[]>) {
            state.list = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchMovieTopRatedAction.pending, (state) => {
            state.pending = true;
        });
        builder.addCase(fetchMovieTopRatedAction.fulfilled, (state) => {
            state.pending = false;
        });
    },
});

export const movieTopRatedReducer = movieTopRatedSlice.reducer;
