import { baseUrl } from '@/assets/api/common.api'
import { LoginParamsData, RegisterParamsData, ServerErrorResponse, ServerSuccessResponse } from '@/assets/types/auth/authTypes'
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
    register: builder.mutation<ServerSuccessResponse | ServerErrorResponse, RegisterParamsData>({
      query: (newUser) => ({
        url: '/auth/registration',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = authApi

export default authApi
