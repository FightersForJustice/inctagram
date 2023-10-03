import { baseUrl } from '@/assets/api/common.api'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAccessTokenFromCookie } from '@/utils/cookies'
import { postsRouts } from '@/components/common/Posts/postsRouter'

export const postsQueryApi = createApi({
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
    getPostsAll: builder.query({
      query: () => ({
        url: postsRouts.postsAll,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetPostsAllQuery } = postsQueryApi

export default postsQueryApi
