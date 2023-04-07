import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { charactersAPI } from "@/services/Characters";
import { locationsAPI } from "@/services/Locations";
import { episodesAPI } from "@/services/Episodes";

const reducers = combineReducers({
    [charactersAPI.reducerPath]: charactersAPI.reducer,
    [locationsAPI.reducerPath]: locationsAPI.reducer,
    [episodesAPI.reducerPath]: episodesAPI.reducer
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(charactersAPI.middleware, locationsAPI.middleware, episodesAPI.middleware)
});

export type TypeRootState = ReturnType<typeof store.getState>