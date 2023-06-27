import { baseUrl } from '@/assets/api/common.api'
import { LoginParamsData, ServerErrorResponse } from '@/assets/types/auth/authTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<ServerErrorResponse, LoginParamsData>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useLoginMutation } = authApi

export default authApi
