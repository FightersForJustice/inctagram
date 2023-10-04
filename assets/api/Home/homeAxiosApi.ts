import { AxiosResponse } from 'axios'

import { NextApiRequest } from 'next'
import { createAxiosServerInstance, instance } from '../instance'
import { postsRouts } from '@/components/common/Posts/postsRouter'
import { HomeType } from '@/core/slices/Home.Types'
const params = {
  pageSize: 1,
}
const urlWithParams = `${postsRouts.postsAll}?pageSize=${params.pageSize}`
const getPostsSSR = async (req: NextApiRequest) => {
  const axiosInstance = createAxiosServerInstance(req)
  const response = await axiosInstance.get<AxiosResponse<HomeType>>(urlWithParams)
  return response.data
}

export const homeAxiosApi = {
  getPostsSSR,
}
