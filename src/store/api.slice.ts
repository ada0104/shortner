import { ApiType } from '@app/enum/api-type.enum';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IApiTypeConfig {
  // api unique id
  uniqueId: string;

  // api path
  path: string;

  // api type
  type: ApiType;

  // trigger loader effect
  loaderEffect: boolean;
}

export interface ApiState {
  apiPending: Record<string, IApiTypeConfig>;
  apiHistory: IApiTypeConfig[];
}

const initialState: ApiState = {
  apiPending: {},
  apiHistory: [],
};

const ApiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setApiPending: (state, action: PayloadAction<IApiTypeConfig>) => {
      const currentState = { ...state };
      currentState.apiPending[action.payload.uniqueId] = action.payload;
      state.apiPending = currentState.apiPending;
    },
    deleteApiPending: (
      state,
      action: PayloadAction<{ uniqueId: string; type: ApiType }>,
    ) => {
      const currentState = { ...state };

      const targetApi = {
        ...currentState.apiPending[action.payload.uniqueId],
      };
      targetApi.type = action.payload.type;

      const newApiHistory = [...currentState.apiHistory];
      newApiHistory.push(targetApi);
      state.apiHistory = newApiHistory;

      delete currentState.apiPending[action.payload.uniqueId];
      state.apiPending = currentState.apiPending;
    },
  },
});

export const ApiReducer = ApiSlice.reducer;
export const ApiAction = ApiSlice.actions;
