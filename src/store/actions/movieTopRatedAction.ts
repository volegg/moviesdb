import { createAsyncThunk } from "@reduxjs/toolkit";

import { getTransport } from "../transport";

export const fetchMovieTopRatedAction = createAsyncThunk<void, number>("fetch/topRated", async (page) => {
    await getTransport().topRatedApi(page);
});
