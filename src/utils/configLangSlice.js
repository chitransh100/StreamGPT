import { createSlice } from "@reduxjs/toolkit";

const configLangSlice = createSlice({
    name: "configLang",
    initialState: {
        lang: "english",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
    }
})
export const { changeLanguage } = configLangSlice.actions;
export default configLangSlice.reducer