import { AxiosResponse } from 'axios'
import { instance } from '../instance'
import { userRouts } from '@/components/common/User/userRouts'
import { ProfileData } from './userTypes'

export const profileApi_ = {
  getProfile() {
    return instance.get<AxiosResponse<ProfileData>>(userRouts.profile).then(({ data }) => data)
  },
}
