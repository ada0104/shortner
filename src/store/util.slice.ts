import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UtilState {
  entryPath?: string;
}

const initialState: UtilState = {};

const UtilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    setEntryPath: (state, action: PayloadAction<string | undefined>) => {
      state.entryPath = action.payload;
    },
  },
});

export const UtilReducer = UtilSlice.reducer;
export const UtilAction = UtilSlice.actions;
