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
    getPostsOfUser: builder.query({
      query: (id: string = '0') => `posts?userId=${id}`,
    }),
    getCommentOfPost: builder.query({
      query: (id: string) => `comments?${id}`,
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetPostsOfUserQuery,
  useGetCommentOfPostQuery,
  useGetUserByIdQuery,
} = tableApi;
