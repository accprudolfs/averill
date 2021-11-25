import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.token
    if (token) {
      headers.set('token', token)
    }
    headers.set('Content-Type', 'application/json')
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  tagTypes: ['PROJECTS', 'KEYS'],
  endpoints: builder => ({
    signUp: builder.mutation({
      query: body => {
        return {
          url: 'signup',
          method: 'POST',
          body,
        }
      },
    }),
    login: builder.mutation({
      query: body => {
        return {
          url: 'login',
          method: 'POST',
          body,
        }
      },
    }),
    getAllPlants: builder.query({
      query: () => 'api/shop/getPlants',
    }),
  }),
})

export const { useSignUpMutation, useLoginMutation, useGetAllPlantsQuery } = api
