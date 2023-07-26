import { AxiosResponse } from 'axios'
import { instance } from '../instance'
import { userRouts } from '@/components/common/User/userRouts'
import { UserProfile, UpdateUserProfile } from './userTypes'

export const profileAxiosApi = {
  getProfile() {
    return instance.get<AxiosResponse<UserProfile>>(userRouts.profile).then(({ data }) => data)
  },
  updateProfile() {
    return instance.post<AxiosResponse<UpdateUserProfile>>(userRouts.profile).then(({ data }) => data)
  },
}
