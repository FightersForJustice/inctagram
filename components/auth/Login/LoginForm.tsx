import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import style from './LoginForm.module.scss'
import { Loading } from '@/components/common/Loaders/Loading'
import EmailFormField from './FormFields/EmailFormField'
import PasswordFormField from './FormFields/PasswordFormField'
import { MainButton } from '@/components/common/Buttons/Buttons'
import { AuthLogoGroup } from '@/components/common/Auth/LogoGroup'
import { authRouts } from '@/components/common/Auth/authRoutes'
import { useTranslation } from 'react-i18next'
import { FormValuesType, LoginFormProps } from './type'



const LoginForm = ({ onSubmit, isLoading, serverError, setServerError }: LoginFormProps) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`login_form.${key}`)
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm<FormValuesType>({ mode: "onBlur" })

  return (
    <div className={style.registration}>
      {isLoading && (
        <div className={style.modal}>
          <Loading />
        </div>
      )}

      <h1>{translate('sign_in')}</h1>
      <AuthLogoGroup />
      <form>
        <EmailFormField register={register} trigger={trigger} errors={errors} setServerError={setServerError} />
        <PasswordFormField register={register} trigger={trigger} errors={errors} setServerError={setServerError} serverError={serverError} />
        <div className={style.forgot_password_container}>
          <Link className={style.forgot_password_link} href={authRouts.forgotPassword}>
            {translate('Forgot_Password')}
          </Link>
        </div>

        <MainButton title={translate('sign_in')} disabled={isLoading} onClick={handleSubmit(onSubmit)} />
      </form>
      <p>{translate('Dont_have_an_account?')}</p>
      <Link href={authRouts.registration} className={style.SignUp}>
        {translate('sign_up')}
      </Link>
    </div>
  )
}

export default LoginForm
