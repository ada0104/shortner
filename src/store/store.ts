import { configureStore } from '@reduxjs/toolkit';
import { UtilReducer } from './util.slice';
import { ApiReducer } from './api.slice';

export const store = configureStore({
  reducer: {
    util: UtilReducer,
    api: ApiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
