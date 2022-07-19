import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoadingSlice {
  loading: boolean;
}

const initialState: LoadingSlice = {
  loading: false,
};

export const loadigSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { isLoading } = loadigSlice.actions;

export const loadingReducer = loadigSlice.reducer;
