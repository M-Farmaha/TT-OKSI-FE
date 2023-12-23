import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: null,
  reducers: {
    setToken: (state, action) => (state = action.payload),
  },
});
export const { setToken } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;

export const progressSlice = createSlice({
  name: "progress",
  initialState: 1,
  reducers: {
    setProgress: (state, action) => {
      return action.payload;
    },
  },
});
export const { setProgress } = progressSlice.actions;
export const progressReducer = progressSlice.reducer;

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => (state = action.payload),
  },
});
export const { setIsLoading } = isLoadingSlice.actions;
export const isLoadingReducer = isLoadingSlice.reducer;
