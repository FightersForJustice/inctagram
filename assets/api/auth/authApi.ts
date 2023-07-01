import { baseUrl } from '@/assets/api/common.api'
import {
  LoginParamsData,
  RegisterParamsData,
  ServerErrorResponse,
  ServerLoginResponse,
  ServerMeResponse,
} from '@/assets/api/auth/authTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
    login: builder.mutation<ServerLoginResponse | ServerErrorResponse, LoginParamsData>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    registration: builder.mutation<void | ServerErrorResponse, RegisterParamsData>({
      query: (newUser) => ({
        url: '/auth/registration',
        method: 'POST',
        body: newUser,
      }),
    }),
    registrationСonfirm: builder.mutation<void | ServerErrorResponse, string>({
      query: (confirmationCode) => ({
        url: '/auth/registration-confirmation',
        method: 'POST',
        body: { confirmationCode }, //an object?
      }),
    }),
    registrationEmailResend: builder.mutation<void | ServerErrorResponse, string>({
      query: (email) => ({
        url: '/auth/registration-email-resending',
        method: 'POST',
        body: { email }, //an object?
      }),
    }),
  }),
})

export const {
  useMeQuery,
  useLoginMutation,
  useRegistrationMutation,
  useRegistrationСonfirmMutation,
  useRegistrationEmailResendMutation,
} = authApi

export default authApi
