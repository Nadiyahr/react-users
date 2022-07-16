import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UsersSlice {
  users: User[];
}

const initialState: UsersSlice = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loadUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { loadUsers } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
