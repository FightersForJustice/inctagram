import { baseUrl } from '@/assets/api/common.api'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAccessTokenFromCookie } from '@/utils/cookies'
import { POST_USER_KEY } from '@/core/reducers/constant_keys'
import { postRouts } from '@/app/routes/post'

const PostUserQueryApi = createApi({
  reducerPath: POST_USER_KEY,
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
    postsUser: builder.mutation({
      query: () => ({
        url: postRouts.postsUser,
        method: 'GET',
      }),
    }),
  }),
})

export const { usePostsUserMutation } = PostUserQueryApi

export default PostUserQueryApi
