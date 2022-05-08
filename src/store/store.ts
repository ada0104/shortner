import { configureStore } from '@reduxjs/toolkit';
import { UserReducer } from './user.slice';
import { UtilReducer } from './util.slice';
import { ApiReducer } from './api.slice';

export const store = configureStore({
  reducer: {
    util: UtilReducer,
    api: ApiReducer,
    user: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
