import { AxiosResponse } from 'axios'
import { userRouts } from '@/components/common/User/userRouts'
import { UserProfile, UpdateUserProfile } from './userTypes'
import { NextApiRequest } from 'next'
import { createAxiosServerInstance, instance } from '../instance'

const getProfileFromServer = async (req: NextApiRequest) => {
  const axiosInstance = createAxiosServerInstance(req)
  const response = await axiosInstance.get<AxiosResponse<UserProfile>>(userRouts.profile)
  return response.data
}

export const profileAxiosApi = {
  getProfile() {
    return instance.get<UserProfile>(userRouts.profile).then(({ data }) => data)
  }, //move to RTK Query
  getProfileFromServer,
}
