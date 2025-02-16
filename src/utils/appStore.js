import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReduce from "./movieSlice";
import gptReducer from "./gptSlice"
import langReducer from "./configLangSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReduce,
            gpt: gptReducer,
            lang: langReducer,
        }
    }
)
export default appStore;