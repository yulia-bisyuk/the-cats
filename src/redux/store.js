import { configureStore } from '@reduxjs/toolkit';
import { catsApi } from './catsApi';

export const store = configureStore({
  reducer: {
    [catsApi.reducerPath]: catsApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(catsApi.middleware);
  },
});
