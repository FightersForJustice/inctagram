import { baseUrl } from '@/assets/api/common.api'
import { userRouts } from '@/components/common/User/userRouts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { userProfile, UpdateuserProfile } from './userTypes'
import { ServerErrorResponse } from '../auth/authTypes'

export const profileQueryApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getProfile: builder.query<userProfile, void>({
      query: () => ({
        url: userRouts.profile,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }),
    }),
    updateProfile: builder.mutation<void | ServerErrorResponse, UpdateuserProfile>({
      query: (userData) => ({
        url: userRouts.profile,
        method: 'PUT',
        body: userData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }),
    }),
  }),
})

export const { useGetProfileQuery, useUpdateProfileMutation } = profileQueryApi

export default profileQueryApi
