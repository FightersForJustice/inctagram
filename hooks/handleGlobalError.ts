import { toast } from 'react-toastify'
import { Dispatch, MiddlewareAPI, PayloadAction, isRejectedWithValue } from '@reduxjs/toolkit'

export const handleGlobalError = (api: MiddlewareAPI) => (next: Dispatch) => (action: PayloadAction<ErrorPayloadType>) => {
  if (isRejectedWithValue(action)) {
    const status = action.payload.status

    if (status === 500) {
      toast.error('Oops! Try again later') //fix
    } else {
      try {
      const error: any = action.payload.data.messages[0].message
      toast.error(error)
      } catch {
        toast.error('Sorry, something went wrong')
      }
    }
  }
  return next(action)
}

type ErrorPayloadType = {
  status: number
  data: DataType
}

type DataType = {
  error: string
  messages: [ErrorMessageType]
  statusCode: number
}

type ErrorMessageType = {
  field: string
  message: string
}
