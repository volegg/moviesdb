import { createAsyncThunk } from "@reduxjs/toolkit";

import { getTransport } from "../transport";

export const fetchMoviePopularAction = createAsyncThunk<void, number>("fetch/moviePopular", async (page: number) => {
    await getTransport().moviePopular(page);
});
