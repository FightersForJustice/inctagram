import authQueryApi from './auth/authQueryApi'
import { authAxiosApi } from './auth/authAxiosApi'
import { profileAxiosApi } from './user/profileAxiosApi'
import profileQueryApi from './user/profileQueryApi'
import PostUserQueryApi from './myProfile/PostUserQueryApi'
import { postsUserAxiosApi } from './myProfile/PostUserAxiosApi'

export const axiosAPI = {
  auth: authAxiosApi,
  profile: profileAxiosApi,
  postsUser: postsUserAxiosApi,
}

export const clientAPI = {
  auth: authQueryApi,
  profile: profileQueryApi,
  postUser: PostUserQueryApi,
}
