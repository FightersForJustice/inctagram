import { baseUrl } from '@/assets/api/common.api'
import {
  LoginParamsData,
  RegisterParamsData,
  ServerErrorResponse,
  ServerMeResponse,
  ServerSuccessResponse,
} from '@/assets/api/auth/authTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//TODO
// 1 – прописать status code
// 2 – change name to registration
// 3 – change folder structure to auth

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    me: builder.query<ServerMeResponse | ServerErrorResponse, void>({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }), //check
    }),
    login: builder.mutation<ServerErrorResponse | void, LoginParamsData>({
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
    registerConfirm: builder.mutation<ServerErrorResponse | void, string>({
      query: (confirmationCode) => ({
        url: '/auth/registration-confirmation',
        method: 'POST',
        body: { confirmationCode }, //an object?
      }),
    }),
    registerEmailResend: builder.mutation<ServerErrorResponse | void, string>({
      query: (email) => ({
        url: '/auth/registration-email-resending',
        method: 'POST',
        body: { email }, //an object?
      }),
    }),
  }),
})

export const { useLoginMutation, useRegisterMutation, useMeQuery, useRegisterConfirmMutation, useRegisterEmailResendMutation } =
  authApi

export default authApi
