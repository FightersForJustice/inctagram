import { AxiosResponse } from 'axios'
import { userRouts } from '@/components/common/User/userRouts'

import { NextApiRequest } from 'next'
import { createAxiosServerInstance, instance } from '../instance'
import { postsRouts } from '@/components/common/Posts/postsRouter'

const getPostsServer = async (req: NextApiRequest) => {
  const axiosInstance = createAxiosServerInstance(req)
  const response = await axiosInstance.get<AxiosResponse>(postsRouts.postsAll)
  return response.data
}

export const postsAxiosApi = {
  getPostsAll() {
    return instance.get(postsRouts.postsAll).then(({ data }) => data)
  },
  getPostsServer,
}
