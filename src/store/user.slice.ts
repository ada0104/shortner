import { UserInfo } from '@api/index.defs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userInfo: UserInfo | null;
  jwtToken: string | null;
}

const initialState: UserState = {
  userInfo: null,
  jwtToken: null,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo | null>) => {
      state.userInfo = action.payload;
    },
    setJwtToken: (state, action: PayloadAction<string | null>) => {
      state.jwtToken = action.payload;
    },
  },
});

export const UserReducer = UserSlice.reducer;
export const UserAction = UserSlice.actions;
