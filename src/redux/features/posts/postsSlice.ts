import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PostsSlice {
  posts: Post[];
  postById: Post;
}

const initialState: PostsSlice = {
  posts: [],
  postById: {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  },
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    loadPostById: (state, action: PayloadAction<Post>) => {
      state.postById = action.payload;
    },
  },
});

export const { loadPosts, loadPostById } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
