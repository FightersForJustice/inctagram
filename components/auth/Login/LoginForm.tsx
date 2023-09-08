import Link from 'next/link'
import { useForm } from 'react-hook-form'
import style from './LoginForm.module.scss'
import { Loading } from '@/components/common/Loaders/Loading'
import EmailFormField from './FormFields/EmailFormField'
import PasswordFormField from './FormFields/PasswordFormField'
import { AuthLogoGroup } from '@/components/common/Auth/LogoGroup'
import { authRouts } from '@/app/routes/authRoutes'
import { useTranslation } from 'react-i18next'
import authStyle from '@/@ui/design/settings/commonAuth.module.scss'
import { Button } from '@/@ui/ui-kit/Button/Button'
import classNames from 'classnames'
import { FormValuesTypeLogin, LoginFormProps } from './type'
import { useEffect } from 'react'
import { errorsTrigger } from '@/hooks/errorsTrigger'

const LoginForm = ({ onSubmit, isLoading, serverError, setServerError }: LoginFormProps) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`login_form.${key}`)
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<FormValuesTypeLogin>({ mode: 'onBlur' })

  useEffect(() => {
    errorsTrigger(trigger, errors)
  }, [t])
  trigger

  return (
    <div className={authStyle.authContainer}>
      {isLoading && (
        <div className={authStyle.loading}>
          <Loading />
        </div>
      )}

      <form className={authStyle.authForm}>
        <h1 className={classNames(authStyle.header, style.header)}>{translate('sign_in')}</h1>
        <AuthLogoGroup />
        <EmailFormField register={register} errors={errors} setServerError={setServerError} />
        <PasswordFormField register={register} errors={errors} setServerError={setServerError} serverError={serverError} />
        <div className={style.forgot_password_container}>
          <Link className={style.forgot_password_link} href={authRouts.forgotPassword}>
            {translate('Forgot_Password')}
          </Link>
        </div>
        <div className={style.buttonWrapper}>
          <Button text={translate('sign_in')} disabled={isLoading} onClick={handleSubmit(onSubmit)} type="submit" />
        </div>
        <p className={style.text}>{translate('Dont_have_an_account?')}</p>
        <Link href={authRouts.registration} className={style.SignUp}>
          {translate('sign_up')}
        </Link>
      </form>
    </div>
  )
}

export default LoginForm
