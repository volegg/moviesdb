import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { PageSize, View } from "src/const/pagination";

function getInitialState(): SettingsState {
    return {
        pageSize: PageSize.ten,
        view: View.list,
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
        setViewList(state, { payload }: PayloadAction<View>) {
            state.view = payload;
        },
    },
});

export const settingsReducer = settingsSlice.reducer;
