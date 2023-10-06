import authQueryApi from './auth/authQueryApi'
import { authAxiosApi } from './auth/authAxiosApi'
import { profileAxiosApi } from './user/profileAxiosApi'
import profileQueryApi from './user/profileQueryApi'
import PostUserQueryApi from './myProfile/PostUserQueryApi'

export const axiosAPI = {
  auth: authAxiosApi,
  profile: profileAxiosApi,
}

export const clientAPI = {
  auth: authQueryApi,
  profile: profileQueryApi,
  postUser: PostUserQueryApi,
}
