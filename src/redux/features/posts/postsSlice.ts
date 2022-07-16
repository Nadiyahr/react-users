import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PostsSlice {
  posts: Post[];
}

const initialState: PostsSlice = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { loadPosts } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
