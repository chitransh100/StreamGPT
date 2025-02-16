import { createSlice } from "@reduxjs/toolkit"
const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showgpt: false,
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showgpt = !state.showgpt;
        }
    }
})
export const { toggleGptSearchView } = gptSlice.actions
export default gptSlice.reducer
