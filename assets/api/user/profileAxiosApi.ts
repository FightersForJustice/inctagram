import { AxiosResponse } from 'axios'
import { userRouts } from '@/app/routes/userRouts'
import { UserProfile, UpdateUserProfile } from './userTypes'
import { NextApiRequest } from 'next'
import { createAxiosServerInstance, instance } from '../instance'

const getProfileFromServer = async (req: NextApiRequest, id: number) => {
  const axiosInstance = createAxiosServerInstance(req)
  const response = await axiosInstance.get<AxiosResponse<UserProfile>>(userRouts.profile + id)
  return response.data
}

export const profileAxiosApi = {
  getProfileFromServer,
}
