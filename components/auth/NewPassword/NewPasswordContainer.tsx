import { ChangeEvent, useState, FC, PropsWithChildren, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useNewPasswordCreateMutation, useRecoveryCodeCheckMutation } from '@/assets/api/auth/authApi'
import NewPassword from './NewPassword'
import { IFormInput } from './NewPasswordTypes'

const NewPasswordContainer: FC<PropsWithChildren<{}>> = ({ children }) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onSubmit' })
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [serverError, setServerError] = useState('')
  const [isRecoveryCodeValid, setIsRecoveryCodeValid] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [recoveryMutation, { isLoading: isRecoverLoading }] = useRecoveryCodeCheckMutation()
  const [passwordCreateMutation, { isLoading: isCreatePasswordLoading }] = useNewPasswordCreateMutation()
  const recoveryCode = router.query['code']
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { password } = data

    try {
      if (typeof recoveryCode !== 'string') throw 'some error'
      const response = await passwordCreateMutation({ recoveryCode, newPassword: password })
        .unwrap()
        .then((data) => {
          router.push('/auth/success')
        })
        .catch((error: any) => {
          setServerError(
            error.data.error === 'Unauthorized'
              ? 'The password or email you entered is incorrect. Please try again'
              : error.data.error
          )
          if (error.status == 'FETCH_ERROR') {
            alert('Server Error')
          }
          if (typeof error.data != 'undefined') {
            console.log(error.data.messages[0].message)
          }
          router.push('/auth/failed')
        })
    } catch (error) {
      console.error('Failed to log in:', error)
      router.push('/auth/failed')
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>, setValue: any) => {
    clearErrors()
    setValue(e.target.value)
  }
  useEffect(() => {
    const CheckRecoveryCode = async () => {
      try {
        if (typeof recoveryCode !== 'string') throw 'Recovery code is invalid or expired'
        const response = await recoveryMutation({ recoveryCode })
          .unwrap()
          .then((data) => {
            setIsRecoveryCodeValid(true)
          })
          .catch((error: any) => {
            setServerError(error.data.error === 'Bad request' ? 'Bad request' : error.data.error)
            if (error.status == 'FETCH_ERROR') {
              alert('Server Error')
            }
            if (typeof error.data != 'undefined') {
              console.log(error.data.messages[0].message)
            }
            // router.push('/auth/failed')
          })
      } catch (error) {
        console.error('Failed', error)
        // router.push('/auth/failed')
      }
    }
    CheckRecoveryCode()
  }, [recoveryCode])

  return (
    <NewPassword
      isRecoveryCodeValid={isRecoveryCodeValid}
      register={register}
      handleChange={handleChange}
      errors={errors}
      isRecoverLoading={isRecoverLoading}
      isCreatePasswordLoading={isCreatePasswordLoading}
      password={password}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  )
}

export default NewPasswordContainer
