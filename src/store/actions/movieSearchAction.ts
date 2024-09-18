import { createAsyncThunk } from "@reduxjs/toolkit";

import { getTransport } from "../transport";

export const searchMovieAction = createAsyncThunk<void, SearchMovieParams>("fetch/movieSearch", async (params) => {
    await getTransport().searchMovieApi(params);
});
