import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createBaseSelector } from "../../../shared/lib/redux/createBaseSelector";

export interface IGithubState {
  favourites: IRepo[];
}

const LS_FAV_KEY = "rfk";

const initialState: IGithubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? "[]"),
};

const reducerPath = "github";

export const githubSlice = createSlice({
  name: reducerPath,
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<IRepo>) {
      state.favourites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
    removeFavourites(state, action: PayloadAction<IRepo>) {
      state.favourites = state.favourites.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
  },
});

// Public API
export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;

// Selectors
const baseSelector = createBaseSelector<IGithubState>(reducerPath);

const favourites = createSelector(baseSelector, (state) => state.favourites);

export const selectors = {
  favourites,
};
