import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import style from './LoginForm.module.scss'
import { Loading } from '@/components/common/loaders/Loading'
import EmailFormField from './FormFields/EmailFormField'
import PasswordFormField from './FormFields/PasswordFormField'
import { MainButton } from '@/components/common/Buttons/buttons'
import { AuthLogoGroup } from '@/components/common/Auth/logo-group'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'
import { authRouts } from '@/components/common/Auth/authRouts'

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

      <h1>Sign In</h1>
      <AuthLogoGroup />
      <form>
        <EmailFormField register={register} errors={errors} setServerError={setServerError} />
        <PasswordFormField register={register} errors={errors} setServerError={setServerError} serverError={serverError} />
        <div className={style.forgot_password_container}>
          <Link className={style.forgot_password_link} href="/auth/forgot-password">
            Forgot Password
          </Link>
        </div>

        <MainButton title="Sign In" disabled={isLoading} onClick={handleSubmit(onSubmit)} />
      </form>
      <p>Don’t have an account?</p>
      <Link href={authRouts.registration} className={style.SignUp}>
        Sign Up
      </Link>
    </div>
  )
}

export default LoginForm
