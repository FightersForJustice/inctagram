import authQueryApi from './auth/authQueryApi'
import { authAxiosApi } from './auth/authAxiosApi'
import { profileAxiosApi } from './user/profileAxiosApi'
import profileQueryApi from './user/profileQueryApi'
import { postsAxiosApi } from './posts/postsAxiosApi'
import postsQueryApi from './posts/postsQueryApi'

export const axiosAPI = {
  auth: authAxiosApi,
  profile: profileAxiosApi,
  posts: postsAxiosApi,
}

export const clientAPI = {
  auth: authQueryApi,
  profile: profileQueryApi,
  posts: postsQueryApi,
}
