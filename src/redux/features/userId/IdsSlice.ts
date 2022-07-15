import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IdSlice {
  userId: number;
  postId: number;
  commentId: number;
}

const initialState: IdSlice = {
  userId: 0,
  postId: 0,
  commentId: 0,
};

export const idsSlice = createSlice({
  name: 'ids',
  initialState,
  reducers: {
    loadUserById: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    loadPostById: (state, action: PayloadAction<number>) => {
      state.postId = action.payload;
    },
    loadCommentById: (state, action: PayloadAction<number>) => {
      state.commentId = action.payload;
    },
  },
});

export const { loadUserById, loadPostById, loadCommentById } = idsSlice.actions;

export const idReducer = idsSlice.reducer;
