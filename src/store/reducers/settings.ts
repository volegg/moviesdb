import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { PageSize, SortPerPage, View } from "src/const/pagination";

function getInitialState(): SettingsState {
    return {
        pageSize: PageSize.ten,
        view: View.list,
        sortPerPage: 0,
    };
}

export const settingsSlice = createSlice({
    name: "settings",
    initialState: getInitialState(),
    reducers: {
        reset() {
            return getInitialState();
        },
        setPageSize(state, { payload }: PayloadAction<PageSize>) {
            state.pageSize = payload;
        },
        setView(state, { payload }: PayloadAction<View>) {
            state.view = payload;
        },
        setSortPerPage(staet, { payload }: PayloadAction<SortPerPage>) {
            staet.sortPerPage = payload;
        },
    },
});

export const settingsReducer = settingsSlice.reducer;
