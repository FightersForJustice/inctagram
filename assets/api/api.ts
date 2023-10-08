import authQueryApi from './auth/authQueryApi'
import { authAxiosApi } from './auth/authAxiosApi'
import { profileAxiosApi } from './user/profileAxiosApi'
import profileQueryApi from './user/profileQueryApi'
import { homeAxiosApi } from './Home/homeAxiosApi'
import postsQueryApi, { homeQueryApi } from './Home/homeQueryApi'

export const axiosAPI = {
  auth: authAxiosApi,
  profile: profileAxiosApi,
  posts: homeAxiosApi,
}

export const clientAPI = {
  auth: authQueryApi,
  profile: profileQueryApi,
  posts: postsQueryApi,
  home: homeQueryApi,
}
