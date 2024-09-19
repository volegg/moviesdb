import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { searchMovieAction } from "../actions/movieSearchAction";

function getInitialState(): MovieSearchState {
    return {
        query: "",
        pending: false,
        userPage: 0,
        page: 0,
        totalMovies: 0,
        list: [],
    };
}

export const movieSearchSlice = createSlice({
    name: "movieSearch",
    initialState: getInitialState(),
    reducers: {
        queryPage(state, { payload }: PayloadAction<{ query: string; userPage?: number }>) {
            state.query = payload.query;

            if (payload.userPage) {
                state.userPage = payload.userPage;
            }
        },
        update(state, { payload }: PayloadAction<MovieResultList>) {
            state.page = payload.page;
            state.list = payload.list;
            state.totalMovies = payload.totalMovies;
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
