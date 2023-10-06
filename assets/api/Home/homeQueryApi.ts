import { baseUrl } from '@/assets/api/common.api'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAccessTokenFromCookie } from '@/utils/cookies'
import { postsRouts } from '@/components/common/Home/postsRouter'
import { UserProfile } from '../user/userTypes'
import { userRouts } from '@/app/routes/userRouts'
import { PostsAllType } from '@/pages/home/Home.types'
import { HomeTypeItems, HomeTypeRespons } from '@/core/slices/Home.Types'
export interface HomeImageType {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}

export interface HomePostType {
  id: number
  description: string
  location: null | string
  images: HomeImageType[]
  createdAt: string
  updatedAt: string
}

export type HomeType = {
  totalCount: number
  pageSize: number
  items: HomePostType[]
}
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
    getPostsPrevious: builder.mutation<HomeTypeRespons, number>({
      query: (id) => ({
        url: postsRouts.postsAll + id + '?pageSize=1',
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetPostsPreviousMutation } = homeQueryApi

export default homeQueryApi
