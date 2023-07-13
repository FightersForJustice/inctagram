import { authRouts } from '@/components/common/Auth/authRoutes'
import { ICheckRecoveryCode } from './newPasswordTypes'

export const CheckRecoveryCode = async (props: ICheckRecoveryCode) => {
  const { recoveryCode, router, setServerError, recoveryMutation } = props
  if (typeof recoveryCode !== 'string') return
  const response = await recoveryMutation({ recoveryCode })
    .unwrap()
    .catch((error: any) => {
      switch (error.status) {
        case 400:
          setServerError(error.data.messages[0].message)
        case 429:
          setServerError(error.data.messages[0].message)
        case 'FETCH_ERROR':
          setServerError(error.error)
        default:
          setServerError('A server error has occurred. Please try again')
      }
      router.push(authRouts.failedPasswordRecovery)
    })
}
