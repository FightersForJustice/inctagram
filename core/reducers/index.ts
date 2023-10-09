import { User, userReducer } from '@/core/slices/userSlice'
import { AUTH_API_KEY, HOME_API_KEY, HOME_KEY, PROFILE_API_KEY, USER_KEY } from './constant_keys'
import authQueryApi from '@/assets/api/auth/authQueryApi'
import profileQueryApi from '@/assets/api/user/profileQueryApi'
import { homeReducer } from '../slices/homeSlice'
import { HomeType } from '../slices/Home.Types'
import homeQueryApi from '@/assets/api/Home/homeQueryApi'

const reducers = {
  [AUTH_API_KEY]: authQueryApi.reducer,
  [PROFILE_API_KEY]: profileQueryApi.reducer,
  [HOME_API_KEY]: homeQueryApi.reducer,
  [USER_KEY]: userReducer,
  [HOME_KEY]: homeReducer,
  // ...
}
export const getReducers = () => ({ ...reducers })

export type RootState = {
  [USER_KEY]: {
    userData: User
  }
  [HOME_KEY]: {
    homeData: HomeType
  }
}
