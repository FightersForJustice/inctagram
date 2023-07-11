import { authRouts } from '@/components/common/Auth/authRoutes'
import { ICreateNewPassword } from './newPasswordTypes'

export const CreateNewPassword = async (props: ICreateNewPassword) => {
  const { recoveryCode, router, password, passwordCreateMutation, setServerError, setIsSucceed } = props

  if (typeof recoveryCode !== 'string') return
  setIsSucceed(true)
  const response = await passwordCreateMutation({ recoveryCode, newPassword: password })
    .unwrap()
    .then(() => {
      router.push(authRouts.successPasswordRecovery)
    })
    .catch((error: any) => {
      setIsSucceed(false)
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
    })
}
