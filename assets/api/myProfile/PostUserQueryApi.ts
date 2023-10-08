import { baseUrl } from '@/assets/api/common.api'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAccessTokenFromCookie } from '@/utils/cookies'
import { POST_USER_API_KEY } from '@/core/reducers/constant_keys'
import { postRouts } from '@/app/routes/post'
import { MyProfileDataType } from './MyProfile.Types'

const PostUserQueryApi = createApi({
  reducerPath: POST_USER_API_KEY,
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
    postsUser: builder.mutation<MyProfileDataType, number>({
      query: (postLast) => ({
        url: postRouts.postsUser + postLast + '?pageSize=8',
        method: 'GET',
      }),
    }),
  }),
})

export const { usePostsUserMutation } = PostUserQueryApi

export default PostUserQueryApi
