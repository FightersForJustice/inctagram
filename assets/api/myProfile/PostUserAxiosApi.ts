import { AxiosResponse } from 'axios'

import { NextApiRequest } from 'next'
import { createAxiosServerInstance, instance } from '../instance'
import { MyProfileDataType } from './MyProfile.Types'
import { postRouts } from '@/app/routes/post'
const params = {
  pageSize: 8,
}
const urlWithParams = `${postRouts.postsUser}?pageSize=${params.pageSize}`
const getPostsUserSSR = async (req: NextApiRequest) => {
  const axiosInstance = createAxiosServerInstance(req)
  const response = await axiosInstance.get<AxiosResponse<MyProfileDataType>>(urlWithParams)
  return response.data
}

export const postsUserAxiosApi = {
  getPostsUserSSR,
}
