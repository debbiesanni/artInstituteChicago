import {configureStore} from "@reduxjs/toolkit";
import artworkReducer from "./artwork";

export const store = configureStore({reducer: {artworks: artworkReducer}});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
