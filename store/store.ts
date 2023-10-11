import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import authQueryApi from '../assets/api/auth/authQueryApi'
import { handleGlobalError } from '@/hooks/handleGlobalError'
import profileApi from '@/assets/api/user/profileQueryApi'
import { getReducers } from '@/core/reducers'
import postQueryApi from '@/assets/api/post/postQueryApi'
import PostUserQueryApi from '@/assets/api/myProfile/PostUserQueryApi'
import homeQueryApi from '@/assets/api/Home/homeQueryApi'


export const store = configureStore({
  reducer: getReducers(),
  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(handleGlobalError, authQueryApi.middleware, profileApi.middleware, postQueryApi.middleware, PostUserQueryApi.middleware, homeQueryApi.middleware),

})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
