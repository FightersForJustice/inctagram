import { AxiosResponse } from 'axios'
import { instance } from '../instance'
import { userRouts } from '@/components/common/User/userRouts'
import { ProfileData, UpdateProfileData } from './userTypes'

export const profileApi = {
  getProfile() {
    return instance.get<AxiosResponse<ProfileData>>(userRouts.profile).then(({ data }) => data)
  },
  updateProfile() {
    return instance.post<AxiosResponse<UpdateProfileData>>(userRouts.profile).then(({ data }) => data)
  },
}
