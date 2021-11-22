import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/',
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
  endpoints: builder => ({
    signUp: builder.mutation({
      query: body => {
        return {
          url: 'sign-up',
          method: 'POST',
          body,
        }
      },
    }),
    signIn: builder.mutation({
      query: body => {
        return {
          url: 'sign-in',
          method: 'POST',
          body,
        }
      },
    }),
  }),
})

export const { useSignUpMutation, useSignInMutation } = api
