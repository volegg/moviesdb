import { createAsyncThunk } from "@reduxjs/toolkit";

import { updateQueryParam } from "src/queryString/updateQueryValue";
import { getMovieDbPage } from "src/utils/pagination/movieDbPage";
import { isRecordsInFrame } from "src/utils/pagination/recordsInFrame";

import { selectCurrentUserPage, selectHasMovies } from "../featureSelectors/paginationSelectors";
import { movieSearchSlice } from "../reducers/movieSearch";
import { selectMovieTitle, selectPage } from "../selectors/searchMovies";
import { selectPageSize } from "../selectors/settings";
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
        const actualPage = selectPage(state);
        const selectedPage = selectCurrentUserPage(state);
        const pageSize = selectPageSize(state);
        const hasMovies = selectHasMovies(state);
        const inFrame = isRecordsInFrame(actualPage, params.page, pageSize);
        const title = selectMovieTitle(state);

        if (selectedPage === params.page && title === params.query) {
            return;
        }

        if (inFrame && hasMovies && title === params.query) {
            updateQueryParam("page", params.page);
            thunkAPI.dispatch(
                movieSearchSlice.actions.queryPage({
                    query: params.query,
                    userPage: params.page,
                }),
            );

            return;
        }

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
