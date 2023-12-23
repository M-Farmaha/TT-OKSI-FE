import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testsApi = createApi({
  reducerPath: "tests",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:7373",
  }),

  endpoints: (builder) => ({
    getTestByOrder: builder.query({
      query: ({ token, progress }) => ({
        url: `/tests/${progress}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetTestByOrderQuery } = testsApi;
