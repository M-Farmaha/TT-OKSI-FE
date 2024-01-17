import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://english-quiz-frontend.onrender.com",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),

    logoutUser: builder.mutation({
      query: (token) => ({
        url: "/auth/logout",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    getCurrentUser: builder.query({
      query: (token) => ({
        url: "/auth/current",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["User"],
    }),

    updateUserProgress: builder.mutation({
      query: ({ token, body }) => ({
        url: "/auth/progress",
        method: "PATCH",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),

    updateUserCorrectAnswers: builder.mutation({
      query: ({ token, body }) => ({
        url: "/auth/correct",
        method: "PATCH",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),

    updateTestStatus: builder.mutation({
      query: ({ token, body }) => ({
        url: "/auth/status",
        method: "PATCH",
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["User"],
    }),

    getTestByOrder: builder.query({
      query: ({ token, progress }) => ({
        url: `/tests/${progress}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    getTestLength: builder.query({
      query: (token) => ({
        url: `/tests`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetCurrentUserQuery,
  useUpdateUserProgressMutation,
  useUpdateUserCorrectAnswersMutation,
  useGetTestByOrderQuery,
  useGetTestLengthQuery,
  useUpdateTestStatusMutation,
} = Api;
