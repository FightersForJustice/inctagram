import { baseUrl } from '@/assets/api/common.api'
import { userRouts } from '@/components/common/User/userRouts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ServerErrorResponse } from '../auth/authTypes'
import { UpdateUserProfile, UserProfile } from './userTypes'
import { getAccessTokenFromCookie } from '@/utils/cookies'

export const profileQueryApi = createApi({
  reducerPath: 'profileApi',
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
    getProfile: builder.query<UserProfile, void>({
      query: () => ({
        url: userRouts.profile,
        method: 'GET',
      }),
    }),
    updateProfile: builder.mutation<void | ServerErrorResponse, UpdateUserProfile>({
      query: (userData) => ({
        url: userRouts.profile,
        method: 'PUT',
        body: userData,
      }),
    }),
  }),
})

export const { useGetProfileQuery, useUpdateProfileMutation } = profileQueryApi

export default profileQueryApi