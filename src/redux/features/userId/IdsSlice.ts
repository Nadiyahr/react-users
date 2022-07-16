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
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    setPostId: (state, action: PayloadAction<number>) => {
      state.postId = action.payload;
    },
    setCommentId: (state, action: PayloadAction<number>) => {
      state.commentId = action.payload;
    },
  },
});

export const { setUserId, setPostId, setCommentId } = idsSlice.actions;

export const idsReducer = idsSlice.reducer;
