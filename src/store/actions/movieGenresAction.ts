import { createAsyncThunk } from "@reduxjs/toolkit";

import { getTransport } from "../transport";

export const fetchMovieGenresAction = createAsyncThunk("fetch/movieGenres", async () => {
    await getTransport().genreListApi();
});
