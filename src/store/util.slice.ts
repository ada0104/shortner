import { createSlice } from '@reduxjs/toolkit';

export interface UtilState {}

const initialState: UtilState = {};

const UtilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {},
});

export const UtilReducer = UtilSlice.reducer;
export const UtilAction = UtilSlice.actions;
