import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { isLoadingReducer, progressReducer, tokenReducer } from "./slice";
import { testsApi } from "./testsApi";
import { authApi } from "./authApi";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const reducer = combineReducers({
  token: tokenReducer,
  progress: progressReducer,
  isLoading: isLoadingReducer,
  [testsApi.reducerPath]: testsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "progress", "isLoading"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    testsApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);
