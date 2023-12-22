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

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => (state = action.payload),
  },
});
export const { setIsLoading } = isLoadingSlice.actions;
export const isLoadingReducer = isLoadingSlice.reducer;