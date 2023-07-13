import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import authApi from '../assets/api/auth/authApi'
import { handleGlobalError } from '@/hooks/handleGlobalError'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, handleGlobalError),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
