import { configureStore } from "@reduxjs/toolkit";
import resumeFormReducer from "./features/resumeformSlice";
import resumeSectionApi from "./features/resumeSectionSlice";
import { templateApi } from "./features/templateApi";

const store = configureStore({
    reducer:{
        resumeForm:resumeFormReducer,
        [resumeSectionApi.reducerPath] : resumeSectionApi.reducer,
        [templateApi.reducerPath]: templateApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
            .concat(resumeSectionApi.middleware)
            .concat(templateApi.middleware)
},
);

export type RootState = ReturnType<typeof store.getState>;
export default store;