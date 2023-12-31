import { baseUrl } from '@/assets/api/common.api'
import { userRouts } from '@/components/common/User/userRouts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ServerErrorResponse } from '../auth/authTypes'
import { ServerAvatarResponse, UpdateUserProfile, UserProfile } from './userTypes'
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
    updateProfile: builder.mutation<void, UpdateUserProfile>({
      query: (userData) => ({
        url: userRouts.profile,
        method: 'PUT',
        body: userData,
      }),
    }),
    avatarAdd: builder.mutation<ServerAvatarResponse, FormData>({
      query: (file) => ({
        url: userRouts.avatar,
        method: 'POST',
        body: file,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }),
    }),
    avatarDelete: builder.mutation<void, void>({
      query: () => ({
        url: userRouts.avatar,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }),
    }),
  }),
})

export const { useAvatarAddMutation, useAvatarDeleteMutation, useGetProfileQuery, useUpdateProfileMutation } = profileQueryApi

export default profileQueryApi
