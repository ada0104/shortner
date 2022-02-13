import { configureStore } from '@reduxjs/toolkit';
import { UtilReducer } from './util.slice';

export const store = configureStore({
  reducer: {
    util: UtilReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
