import { createAsyncThunk } from "@reduxjs/toolkit";

import { movieSearchSlice } from "../reducers/movieSearch";
import { getTransport } from "../transport";

export const searchMovieAction = createAsyncThunk<void, SearchMovieParams>(
    "fetch/movieSearch",
    async (params, thunkAPI) => {
        thunkAPI.dispatch(movieSearchSlice.actions.query(params.query));
        await getTransport().searchMovieApi(params);
    },
);
