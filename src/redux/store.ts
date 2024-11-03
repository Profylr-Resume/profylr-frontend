import { configureStore } from "@reduxjs/toolkit";
import resumeFormReducer from "./features/resumeformSlice";

const store = configureStore({
    reducer:{
        resumeForm:resumeFormReducer
    },
   
});

export type RootState = ReturnType<typeof store.getState>;
export default store;