import authQueryApi from './auth/authQueryApi'
import { authAxiosApi } from './auth/authAxiosApi'
import { profileAxiosApi } from './user/profileAxiosApi'
import profileQueryApi from './user/profileQueryApi'
import { postsAxiosApi } from './Home/homeAxiosApi'
import postsQueryApi from './Home/homeQueryApi'

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
