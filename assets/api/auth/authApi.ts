import { baseUrl } from '@/assets/api/common.api'
import {
  LoginParamsData,
  RegisterParamsData,
  ForgotPasswordParamsData,
  NewPasswordParamsData,
  ServerErrorResponse,
  ServerLoginResponse,
  ServerMeResponse,
  recoveryCodeCheckParamsData,
} from '@/assets/api/auth/authTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { authRouts } from '@/components/common/Auth/authRoutes'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    me: builder.query<ServerMeResponse | ServerErrorResponse, void>({
      query: () => ({
        url: authRouts.me,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }),
    }),
    login: builder.mutation<ServerLoginResponse | ServerErrorResponse, LoginParamsData>({
      query: (credentials) => ({
        url: authRouts.login,
        method: 'POST',
        body: credentials,
      }),
    }),
    registration: builder.mutation<void | ServerErrorResponse, RegisterParamsData>({
      query: (newUser) => ({
        url: authRouts.registration,
        method: 'POST',
        body: newUser,
      }),
    }),
    registrationСonfirm: builder.mutation<void | ServerErrorResponse, string>({
      query: (confirmationCode) => ({
        url: authRouts.registrationСonfirm,
        method: 'POST',
        body: { confirmationCode },
      }),
    }),
    registrationEmailResend: builder.mutation<void | ServerErrorResponse, string>({
      query: (email) => ({
        url: authRouts.registrationEmailResend,
        method: 'POST',
        body: { email },
      }),
    }),
    passwordRecover: builder.mutation<ServerErrorResponse | void, ForgotPasswordParamsData>({
      query: (recoverQuery) => ({
        url: authRouts.passwordRecover,
        method: 'POST',
        body: recoverQuery,
      }),
    }),
    newPasswordCreate: builder.mutation<ServerErrorResponse | void, NewPasswordParamsData>({
      query: (createQuery) => ({
        url: authRouts.newPasswordCreate,
        method: 'POST',
        body: createQuery,
      }),
    }),
    recoveryCodeCheck: builder.mutation<ServerErrorResponse | void, recoveryCodeCheckParamsData>({
      query: (recoveryCode) => ({
        url: authRouts.recoveryCodeCheck,
        method: 'POST',
        body: recoveryCode,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: authRouts.logout,
        method: 'POST',
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
  useNewPasswordCreateMutation,
  useRecoveryCodeCheckMutation,
  usePasswordRecoverMutation,
  useLogoutMutation,
} = authApi

export default authApi
