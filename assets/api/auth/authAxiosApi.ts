import { authRouts } from '@/app/routes/authRoutes'
import { createAxiosServerInstance } from '../instance'
import { NextApiRequest } from 'next'

const meServer = async (req: NextApiRequest) => {
  const axiosInstance = createAxiosServerInstance(req)
  const response = await axiosInstance.get(authRouts.me)
  return response.data
}

export const authAxiosApi = {
  meServer,
}
