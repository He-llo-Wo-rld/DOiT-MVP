"use client";

import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./api/postsApi";
import postsReducer from "./slices/postsSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    theme: themeReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});
