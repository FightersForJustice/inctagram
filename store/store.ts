import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import authApi from '../assets/api/auth/authApi'
import { handleGlobalError } from '@/hooks/handleGlobalError'
import { userReducer } from '@/assets/api/auth/userSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import profileApi from '@/assets/api/user/profileApi'

const authPersistConfig = {
  key: 'user',
  storage,
}

const persistedUserReducer = persistReducer(authPersistConfig, userReducer) //not to lose redux data on page refresh

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(handleGlobalError, authApi.middleware, profileApi.middleware),
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
