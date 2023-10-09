import { baseUrl } from '@/assets/api/common.api'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAccessTokenFromCookie } from '@/utils/cookies'
import { postsRouts } from '@/components/common/Home/postsRouter'
import { HomeType } from './Home.types'

export const homeQueryApi = createApi({
  reducerPath: 'homeApi',
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
    getPostsPrevious: builder.mutation<HomeType, number>({
      query: (id) => ({
        url: postsRouts.postsAll + id + '?pageSize=1',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetPostsPreviousMutation } = homeQueryApi

export default homeQueryApi
