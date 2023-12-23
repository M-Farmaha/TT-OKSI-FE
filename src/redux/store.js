import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { isLoadingReducer, tokenReducer } from "./slice";
import { Api } from "./Api";

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
  [Api.reducerPath]: Api.reducer,
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
    Api.middleware,
  ],
});

export const persistor = persistStore(store);
