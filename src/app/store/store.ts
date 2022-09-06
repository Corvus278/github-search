import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { githubApi } from "entities/SearchInput/model/github.api";
import { githubReducer } from "entities/RepoCard/model/github.slice";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

// For refetch on focus
setupListeners(store.dispatch);
