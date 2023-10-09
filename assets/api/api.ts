import authQueryApi from './auth/authQueryApi'
import { authAxiosApi } from './auth/authAxiosApi'
import { profileAxiosApi } from './user/profileAxiosApi'
import profileQueryApi from './user/profileQueryApi'
import PostUserQueryApi from './myProfile/PostUserQueryApi'
import { postsUserAxiosApi } from './myProfile/PostUserAxiosApi'
import { homeAxiosApi } from './Home/homeAxiosApi'
import postsQueryApi, { homeQueryApi } from './Home/homeQueryApi'

export const axiosAPI = {
  auth: authAxiosApi,
  profile: profileAxiosApi,
  postsUser: postsUserAxiosApi,
  posts: homeAxiosApi,
}

export const clientAPI = {
  auth: authQueryApi,
  profile: profileQueryApi,
  postUser: PostUserQueryApi,
  posts: postsQueryApi,
  home: homeQueryApi,
}
