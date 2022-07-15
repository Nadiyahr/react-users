import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './api';

export const tableApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (route: string) => route,
    }),
    getUserById: builder.query({
      query: (id: string) => `users/${id}`,
    }),
    getPostsOfUser: builder.query({
      query: (id: number) => `posts?${id}`,
    }),
    getCommentOfPost: builder.query({
      query: (id: number) => `comments?${id}`,
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetPostsOfUserQuery,
  useGetCommentOfPostQuery,
} = tableApi;
