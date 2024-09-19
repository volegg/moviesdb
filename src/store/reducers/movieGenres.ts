import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

function getInitialState(): MovieGenresState {
    return {
        list: [],
    };
}

export const movieGenresSlice = createSlice({
    name: "movieGenres",
    initialState: getInitialState(),
    reducers: {
        update(state, { payload }: PayloadAction<MovieGenresState["list"]>) {
            state.list = payload;
        },
    },
});

export const movieGenresReducer = movieGenresSlice.reducer;
