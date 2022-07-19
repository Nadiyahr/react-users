import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './api';

export const tableApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (route: string) => route,
    }),
    getUserById: builder.query({
      query: (id: string = '0') => `users/${id}`,
    }),
    getPostById: builder.query({
      query: (id: string = '0') => `posts/${id}`,
    }),
    getPostsOfUser: builder.query({
      query: (id: string) => `posts?userId=${id}`,
    }),
    getCommentOfPost: builder.query({
      query: (id: string) => `comments?postId=${id}`,
    }),
    updatePost: builder.mutation({
      query: ({ id, put }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: put,
      }),
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetPostsOfUserQuery,
  useGetCommentOfPostQuery,
  useGetUserByIdQuery,
  useGetPostByIdQuery,
  useUpdatePostMutation,
} = tableApi;
