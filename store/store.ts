import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import authQueryApi from '../assets/api/auth/authQueryApi'
import { handleGlobalError } from '@/hooks/handleGlobalError'
import profileApi from '@/assets/api/user/profileQueryApi'
import { getReducers } from '@/core/reducers'
import PostUserQueryApi from '@/assets/api/myProfile/PostUserQueryApi'

export const store = configureStore({
  reducer: getReducers(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(handleGlobalError, authQueryApi.middleware, profileApi.middleware, PostUserQueryApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
