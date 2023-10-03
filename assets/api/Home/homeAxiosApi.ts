import { AxiosResponse } from 'axios'

import { NextApiRequest } from 'next'
import { createAxiosServerInstance, instance } from '../instance'
import { postsRouts } from '@/components/common/Posts/postsRouter'
import { HomeType } from '@/core/slices/Home.Types'

const getPostsAll = async (req: NextApiRequest) => {
  const axiosInstance = createAxiosServerInstance(req)
  const response = await axiosInstance.get<AxiosResponse<HomeType>>(postsRouts.postsAll)
  return response.data
}

export const postsAxiosApi = {
  getPostsAll,
}
