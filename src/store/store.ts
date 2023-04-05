import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { charactersAPI } from "@/services/Characters";

const reducers = combineReducers({
    [charactersAPI.reducerPath]: charactersAPI.reducer
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(charactersAPI.middleware)
});

export type TypeRootState = ReturnType<typeof store.getState>