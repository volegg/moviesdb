import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

function getInitialState(): UIState {
    return {
        layoutName: "",
    };
}

export const uiSlice = createSlice({
    name: "ui",
    initialState: getInitialState(),
    reducers: {
        setLayoutName(state, { payload }: PayloadAction<string>) {
            state.layoutName = payload;
        },
    },
});

export const uiReducer = uiSlice.reducer;
