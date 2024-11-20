import { configureStore } from "@reduxjs/toolkit";
import resumeFormReducer from "./features/resumeformSlice";
import resumeSectionApi from "./features/resumeSectionSlice";
import personaReducer from "./features/personaSlice";
import authReducer from "./features/authSlice";
import authApi from "./features/authApi";
import { templateApi } from "./features/templateApi";

const store = configureStore({
    reducer:{
        resumeForm:resumeFormReducer,
        [resumeSectionApi.reducerPath] : resumeSectionApi.reducer,
        [templateApi.reducerPath]: templateApi.reducer ,
        [authApi.reducerPath]: authApi.reducer ,
        persona:personaReducer,
        auth: authReducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
            .concat(resumeSectionApi.middleware)
            .concat(templateApi.middleware)
            .concat(authApi.middleware)
},
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;