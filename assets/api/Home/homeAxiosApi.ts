import { AxiosResponse } from 'axios'

import { NextApiRequest } from 'next'
import { createAxiosServerInstance, instance } from '../instance'
import { postsRouts } from '@/components/common/Posts/postsRouter'

const params = {
  pageSize: '2',
}

const getPostsAll = async (req: NextApiRequest, idPostLast: string) => {
  const axiosInstance = createAxiosServerInstance(req)
  const response = await axiosInstance.get<AxiosResponse>(postsRouts.postsAll + idPostLast, { params })
  return response.data
}

export const postsAxiosApi = {
  getPostsAll,
}
