import { baseUrl } from '@/assets/api/common.api'
import { userRouts } from '@/components/common/User/userRouts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProfileData, UpdateProfileData } from './userTypes'
import { ServerErrorResponse } from '../auth/authTypes'

export const profileApi_ = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getProfile: builder.query<ProfileData, void>({
      query: () => ({
        url: userRouts.profile,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }),
    }),
    updateProfile: builder.mutation<void | ServerErrorResponse, UpdateProfileData>({
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

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi_

export default profileApi_

// // Implement the server-side rendering for profile data
// export async function getServerSideProps() {
//   const { data: profileData } = await useGetProfileQuery()
//   return {
//     props: {
//       profileData,
//     },
//   }
// }
