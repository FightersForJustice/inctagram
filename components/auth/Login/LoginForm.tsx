import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import style from './LoginForm.module.scss'
import { Loading } from '@/components/common/loaders/Loading'
import EmailFormField from './FormFields/EmailFormField'
import PasswordFormField from './FormFields/PasswordFormField'
import { MainButton } from '@/components/common/Buttons/buttons'
import { AuthLogoGroup } from '@/components/common/Auth/logo-group'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'

type FormValuesType = {
  email: string
  password: string
}

type LoginFormProps = {
  onSubmit: SubmitHandler<FormValuesType>
  isLoading: boolean
  serverError: string
  setServerError: Dispatch<SetStateAction<string>>
}

const LoginForm = ({ onSubmit, isLoading, serverError, setServerError }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesType>()

  return (
    <div className={style.registration}>
      {isLoading && (
        <div className={style.modal}>
          <Loading />
        </div>
      )}

      <h1>Sign Up</h1>
      <AuthLogoGroup />
      <form>
        <EmailFormField register={register} errors={errors} setServerError={setServerError}/>
        <PasswordFormField register={register} errors={errors} setServerError={setServerError} serverError={serverError} />
        <div className={style.forgot_password_container}>
          <a className={style.forgot_password_link} href="/auth/forgot-password">
            Forgot Password
          </a>
        </div>

        <MainButton title="Sign In" disabled={false} onClick={handleSubmit(onSubmit)} />
      </form>
      <p>Don’t have an account?</p>
      <a href="/auth/registration" className={style.SignUp}>
        Sign Up
      </a>
    </div>
  )
}

export default LoginForm
