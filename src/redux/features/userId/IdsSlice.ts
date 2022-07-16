import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IdSlice {
  userId: number;
  postId: boolean;
  commentId: boolean;
}

const initialState: IdSlice = {
  userId: 0,
  postId: false,
  commentId: false,
};

export const idsSlice = createSlice({
  name: 'ids',
  initialState,
  reducers: {
    loadUserById: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    loadPostById: (state, action: PayloadAction<boolean>) => {
      state.postId = action.payload;
    },
    loadCommentById: (state, action: PayloadAction<boolean>) => {
      state.commentId = action.payload;
    },
  },
});

export const { loadUserById, loadPostById, loadCommentById } = idsSlice.actions;

export const idsReducer = idsSlice.reducer;
