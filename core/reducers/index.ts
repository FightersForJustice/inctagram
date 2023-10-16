import { User, userReducer } from '@/core/slices/userSlice'
import { AUTH_API_KEY, POST_API_KEY, POST_CREATION_KEY, PROFILE_API_KEY, USER_KEY } from './constant_keys'
import authQueryApi from '@/assets/api/auth/authQueryApi'
import profileQueryApi from '@/assets/api/user/profileQueryApi'
import { postCreationReducer } from '../slices/postCreationSlice'
import postQueryApi from '@/assets/api/post/postQueryApi'

const reducers = {
  [AUTH_API_KEY]: authQueryApi.reducer,
  [PROFILE_API_KEY]: profileQueryApi.reducer,
  [USER_KEY]: userReducer,
  [POST_CREATION_KEY]: postCreationReducer,
  [POST_API_KEY]: postQueryApi.reducer,
  // ...
}
export const getReducers = () => ({ ...reducers })

export type RootState = {
  [USER_KEY]: {
    userData: User
  }
  [POST_CREATION_KEY]: {
    postData: any
  }
}
