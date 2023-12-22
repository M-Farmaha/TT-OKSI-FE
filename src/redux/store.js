import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { isLoadingReducer, tokenReducer } from "./slice";
import { dealsApi } from "./dealsApi";
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
  isLoading: isLoadingReducer,
  [dealsApi.reducerPath]: dealsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "isLoading"],
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
    dealsApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);
