import authApi from './auth/authApi'
import { authAxiosApi } from './user/authAxiosApi'
import { profileAxiosApi } from './user/profileAxiosApi'
import profileQueryApi from './user/profileQueryApi'

export const serverAPI = {
  auth: authAxiosApi,
  profile: profileAxiosApi,
}

export const clientAPI = {
  auth: authApi,
  profile: profileQueryApi,
}
