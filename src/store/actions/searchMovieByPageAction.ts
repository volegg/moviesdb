import { createAsyncThunk } from "@reduxjs/toolkit";

import { updateQueryParam } from "src/queryString/updateQueryValue";
import { getMovieDbPage } from "src/utils/pagination/movieDbPage";

import { selectPageSize } from "../selectors/searchMovies";
import { State } from "../store";

import { searchMovieAction } from "./movieSearchAction";

type SearchMovieByPageParams = {
    query: string;
    page: number;
};

export const searchMovieByPageAction = createAsyncThunk<void, SearchMovieByPageParams>(
    "operation/searchMovieByPage",
    (params, thunkAPI) => {
        const state = thunkAPI.getState() as State;
        const pageSize = selectPageSize(state);
        const query = params.query.trim().replace(/\s+/g, " ");

        let page = 1;
        let userPage = 1;

        if (params.page) {
            page = getMovieDbPage(params.page, pageSize);
            userPage = params.page;
        }

        updateQueryParam("page", userPage);
        updateQueryParam("title", query);
        thunkAPI.dispatch(searchMovieAction({ query, page, userPage }));
    },
);
