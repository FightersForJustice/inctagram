import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import authApi from '../assets/api/Auth/AuthApi'
import { toast } from 'react-toastify'
import { MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit'

const showGlobalError = (api: MiddlewareAPI) => (next: any) => (action: any) => {
  if (isRejectedWithValue(action)) {
    const status = action.payload.status

    if (status === 500) {
      toast.error('Oops! Try again later')
    } else {
      const error = action.payload.data.messages
      toast.error(error)
    }
  }
  return next(action)
}

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, showGlobalError),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
