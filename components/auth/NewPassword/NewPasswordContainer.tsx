import { ChangeEvent, useState, FC, PropsWithChildren, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useNewPasswordCreateMutation, useRecoveryCodeCheckMutation } from '@/assets/api/auth/authApi'
import NewPassword from './NewPassword'
import { IFormInput } from './NewPasswordTypes'
import { CheckRecoveryCode } from './CheckRecoveryCode'
import { CreateNewPassword } from './CreateNewPassword'

const NewPasswordContainer: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { register, handleSubmit, clearErrors, formState: { errors }, }
    = useForm<IFormInput>({ mode: 'onSubmit' })
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [serverError, setServerError] = useState('')
  const [recoveryMutation, { isLoading: isRecoverLoading }] = useRecoveryCodeCheckMutation()
  const [passwordCreateMutation, { isLoading: isCreatePasswordLoading }] = useNewPasswordCreateMutation()
  const recoveryCode = router.query['code']

  useEffect(() => {
    CheckRecoveryCode({ recoveryCode, router, setServerError, recoveryMutation })
  }, [recoveryCode])

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { password } = data
    CreateNewPassword({ recoveryCode, router, password, passwordCreateMutation, setServerError })
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>, setValue: any) => {
    clearErrors()
    setValue(e.target.value)
  }

  return (
    <NewPassword
      register={register}
      handleChange={handleChange}
      errors={errors}
      serverError={serverError}
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