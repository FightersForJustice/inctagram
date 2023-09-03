import { authRouts } from '@/app/routes/authRoutes'
import { ICheckRecoveryCode } from './newPasswordTypes'
import { ServerErrorResponse } from '@/assets/api/auth/authTypes'

export const CheckRecoveryCode = async (props: ICheckRecoveryCode) => {
  const { recoveryCode, router, setServerError, recoveryMutation } = props
  if (typeof recoveryCode !== 'string') return
  const response = await recoveryMutation({ recoveryCode })
    .unwrap()
    .catch((error: ServerErrorResponse) => {
      switch (error.status) {
        case 400:
          setServerError(error.data.messages[0].message)
        case 429:
          setServerError(error.data.messages[0].message)
        case 404:
          setServerError(error.data.error)
        default:
          setServerError('A server error has occurred. Please try again')
      }
      router.push(authRouts.failedPasswordRecovery)
    })
}
