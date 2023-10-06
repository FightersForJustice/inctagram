import { User, userReducer } from '@/core/slices/userSlice'
import { AUTH_API_KEY, POST_USER_KEY, PROFILE_API_KEY, USER_KEY } from './constant_keys'
import authQueryApi from '@/assets/api/auth/authQueryApi'
import profileQueryApi from '@/assets/api/user/profileQueryApi'
import PostUserQueryApi from '@/assets/api/myProfile/PostUserQueryApi'

const reducers = {
  [AUTH_API_KEY]: authQueryApi.reducer,
  [PROFILE_API_KEY]: profileQueryApi.reducer,
  [USER_KEY]: userReducer,
  [POST_USER_KEY]: PostUserQueryApi.reducer,
  // ...
}
export const getReducers = () => ({ ...reducers })

export type RootState = {
  [USER_KEY]: {
    userData: User
  }
}
