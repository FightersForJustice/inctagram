import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import style from './LoginForm.module.scss'
import { Loading } from '@/components/common/loaders/Loading'
import EmailFormField from './FormFields/EmailFormField'
import PasswordFormField from './FormFields/PasswordFormField'
import { MainButton } from '@/components/common/Buttons/buttons'
import { AuthLogoGroup } from '@/components/common/Auth/logo-group'

type FormValuesType = {
  email: string
  password: string
}

type LoginFormProps = {
  onSubmit: SubmitHandler<FormValuesType>
  isLoading: boolean
}

const LoginForm = ({ onSubmit, isLoading }: LoginFormProps) => {
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
        <EmailFormField register={register} errors={errors} />
        <PasswordFormField register={register} errors={errors} />
        <div className={style.forgot_password_container}>
          <a className={style.forgot_password_link} href="/auth/forgot-password">Forgot Password</a>
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
