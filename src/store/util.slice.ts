import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IStartUp {
  // entry app started path
  entryPath: string | null;
  // jwt setting complete
  jwtSetting: boolean;
  // is valid user complete
  isValidUserComplete: boolean;
}

export interface UtilState {
  startUp: IStartUp;
}

const initialState: UtilState = {
  startUp: {
    entryPath: null,
    jwtSetting: false,
    isValidUserComplete: false,
  },
};

const UtilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    setEntryPath: (state, action: PayloadAction<string>) => {
      state.startUp.entryPath = action.payload;
    },
    setJwtSetting: (state, action: PayloadAction<boolean>) => {
      state.startUp.jwtSetting = action.payload;
    },
    setValidUserComplete: (state, action: PayloadAction<boolean>) => {
      state.startUp.isValidUserComplete = action.payload;
    },
  },
});

export const UtilReducer = UtilSlice.reducer;
export const UtilAction = UtilSlice.actions;
