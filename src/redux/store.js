import { configureStore } from "@reduxjs/toolkit";
import { catsApi } from "./catsApi";
import { persistedCatsDetailsReducer } from "./catsDetailsSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    catsDetails: persistedCatsDetailsReducer,
    [catsApi.reducerPath]: catsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(catsApi.middleware);
  },
});

export const persistor = persistStore(store);
