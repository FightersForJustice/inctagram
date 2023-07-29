import authQueryApi from './auth/authQueryApi'
import { authAxiosApi } from './auth/authAxiosApi'
import { profileAxiosApi } from './user/profileAxiosApi'
import profileQueryApi from './user/profileQueryApi'

export const serverAPI = {
  auth: authAxiosApi,
  profile: profileAxiosApi,
}

export const clientAPI = {
  auth: authQueryApi,
  profile: profileQueryApi,
}
