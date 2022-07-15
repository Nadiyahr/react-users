import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UsersSlice {
  data: User[];
}

const initialState: UsersSlice = {
  data: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadUsers: (state, action: PayloadAction<User[]>) => {
      state.data = action.payload;
    },
  },
});

export const { loadUsers } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
