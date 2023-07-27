import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import authQueryApi from '../assets/api/auth/authQueryApi'
import { handleGlobalError } from '@/hooks/handleGlobalError'
import { userReducer } from '@/assets/api/auth/userSlice'
import profileApi from '@/assets/api/user/profileQueryApi'

export const store = configureStore({
  reducer: {
    [authQueryApi.reducerPath]: authQueryApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(handleGlobalError, authQueryApi.middleware, profileApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
