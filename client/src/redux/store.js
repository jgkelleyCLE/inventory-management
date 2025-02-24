import { configureStore } from "@reduxjs/toolkit";
import globalReducer from './globalSlice'
import { api } from "./api";

export const store = configureStore({
    reducer: {
        global: globalReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})