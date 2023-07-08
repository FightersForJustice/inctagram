import { toast } from 'react-toastify'
import { MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit'

export const handleGlobalError = (api: MiddlewareAPI) => (next: any) => (action: any) => {
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
