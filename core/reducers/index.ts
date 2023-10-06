import { User, userReducer } from '@/core/slices/userSlice'
import { AUTH_API_KEY, POST_USER_API_KEY, POST_USER_KEY, PROFILE_API_KEY, USER_KEY } from './constant_keys'
import authQueryApi from '@/assets/api/auth/authQueryApi'
import profileQueryApi from '@/assets/api/user/profileQueryApi'
import PostUserQueryApi from '@/assets/api/myProfile/PostUserQueryApi'
import { PostUserReducer } from '../slices/postUserSlice'
import { MyProfileDataType, PostLastType } from '@/assets/api/myProfile/MyProfile.Types'

const reducers = {
  [AUTH_API_KEY]: authQueryApi.reducer,
  [PROFILE_API_KEY]: profileQueryApi.reducer,
  [USER_KEY]: userReducer,
  [POST_USER_API_KEY]: PostUserQueryApi.reducer,
  [POST_USER_KEY]: PostUserReducer,
  // ...
}
export const getReducers = () => ({ ...reducers })

export type RootState = {
  [USER_KEY]: {
    userData: User
  }
  [POST_USER_KEY]: {
    PostUserData: MyProfileDataType & PostLastType
  }
}
