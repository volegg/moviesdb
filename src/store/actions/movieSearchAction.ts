import { createAsyncThunk } from "@reduxjs/toolkit";

import { movieSearchSlice } from "../reducers/movieSearch";
import { getTransport } from "../transport";

export const searchMovieAction = createAsyncThunk<void, SearchMovieParams>(
    "fetch/movieSearch",
    async (params, thunkAPI) => {
        thunkAPI.dispatch(
            movieSearchSlice.actions.queryPage({
                query: params.query,
                userPage: params.userPage,
            }),
        );
        await getTransport().searchMovieApi({
            query: params.query,
            page: params.page,
        });
    },
);
