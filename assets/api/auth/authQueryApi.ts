import { baseUrl } from '@/assets/api/common.api'
import {
  LoginParamsData,
  RegisterParamsData,
  ForgotPasswordParamsData,
  NewPasswordParamsData,
  ServerErrorResponse,
  ServerLoginResponse,
  recoveryCodeCheckParamsData,
  UserData,
} from '@/assets/api/auth/authTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { authRouts } from '@/components/common/Auth/authRoutes'
import { getAccessTokenFromCookie } from '@/utils/cookies'

const authQueryApi = createApi({
  reducerPath: 'authQueryApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = getAccessTokenFromCookie()
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    me: builder.query<UserData, void>({
      query: () => ({
        url: authRouts.me,
        method: 'GET',
      }),
    }),
    login: builder.mutation<ServerLoginResponse, LoginParamsData>({
      query: (credentials) => ({
        url: authRouts.login,
        method: 'POST',
        body: credentials,
      }),
    }),
    registration: builder.mutation<void, RegisterParamsData>({
      query: (newUser) => ({
        url: authRouts.registration,
        method: 'POST',
        body: newUser,
      }),
    }),
    registrationСonfirm: builder.mutation<void, string>({
      query: (confirmationCode) => ({
        url: authRouts.registrationСonfirm,
        method: 'POST',
        body: { confirmationCode },
      }),
    }),
    registrationEmailResend: builder.mutation<void, string>({
      query: (email) => ({
        url: authRouts.registrationEmailResend,
        method: 'POST',
        body: { email },
      }),
    }),
    passwordRecover: builder.mutation<ServerErrorResponse, ForgotPasswordParamsData>({
      query: (recoverQuery) => ({
        url: authRouts.passwordRecover,
        method: 'POST',
        body: recoverQuery,
      }),
    }),
    newPasswordCreate: builder.mutation<ServerErrorResponse, NewPasswordParamsData>({
      query: (createQuery) => ({
        url: authRouts.newPasswordCreate,
        method: 'POST',
        body: createQuery,
      }),
    }),
    recoveryCodeCheck: builder.mutation<ServerErrorResponse, recoveryCodeCheckParamsData>({
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
} = authQueryApi

export default authQueryApi
