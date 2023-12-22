import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dealsApi = createApi({
  reducerPath: "deals",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zb-backend-oquk.onrender.com",
  }),

  endpoints: (builder) => ({
    getDeals: builder.query({
      query: token => ({
        url: "/deals",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetDealsQuery } = dealsApi;
