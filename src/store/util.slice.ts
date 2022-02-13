import { createSlice } from '@reduxjs/toolkit';

export interface UtilState {
  /** Show Loader */
  showLoader: boolean;
}

const initialState: UtilState = {
  showLoader: false,
};

const UtilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    changeLoader: (state) => {
      state.showLoader = !state.showLoader;
    },
  },
});

export const UtilReducer = UtilSlice.reducer;
export const UtilAction = UtilSlice.actions;
