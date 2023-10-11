import { baseUrl } from '@/assets/api/common.api'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getAccessTokenFromCookie } from '@/utils/cookies'
import { POST_API_KEY } from '@/core/reducers/constant_keys'
import { postRoutes } from '@/app/routes/postRoutes'

type ImagesType = {
  url: string
  width: number
  height: number
  fileSize: number
  uploadId: string
}

type imagesResponse = {
  images: ImagesType[]
}

const postQueryApi = createApi({
  reducerPath: POST_API_KEY,
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
    imageAdd: builder.mutation<imagesResponse, any>({
      query: (file) => ({
        url: postRoutes.image,
        method: 'POST',
        body: file,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }),
    }),
    postCreate: builder.mutation<any, any>({
      query: (data) => ({
        url: postRoutes.post,
        method: 'POST',
        body: { description: data.description, childrenMetadata: data.childrenMetadata },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }),
    }),
  }),
})

export const { useImageAddMutation, usePostCreateMutation } = postQueryApi

export default postQueryApi
