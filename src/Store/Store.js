import { configureStore } from "@reduxjs/toolkit"; 
import themeReducer from "./Slice/themeSlice"; // Correct import

const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;