import style from './RegistrationForm.module.scss'
import { useForm } from 'react-hook-form'
import { getLayout } from '@/components/Layout/Layout'
import { Validate, ValidateField } from '../Login/validate'
import { Loading } from '@/components/common/Loaders/Loading'
import { FormValuesTypeRegister, RegistrationPropsType } from './type'
import { PasswordInput, MainInput } from '@/components/common/Inputs/Inputs'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { authRouts } from '@/components/common/Auth/authRoutes'
import { useEffect } from 'react'
import { errorsTrigger } from '@/hooks/errorsTrigger'

const RegistrationForm = (props: RegistrationPropsType) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`registration_form.${key}`)
  const { onSubmit, isLoading, errorMessageEmail, errorMessageName, errorMessagePassword, ArrayErrorMessager } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm<FormValuesTypeRegister>({ mode: 'onBlur' })
  const disabled = Object.keys(errors).length === 0 ? false : true

  useEffect(() => {
    errorsTrigger(trigger, errors)
  }, [t])
  return (
    <div className={style.registration}>
      {isLoading && (
        <div className={style.modal}>
          <Loading />
        </div>
      )}
      <h1>{translate('sign_up')}</h1>
      <div className={style.item}>
        <Link href="" className={style.link}>
          <img src="/img/google-svg.svg" alt="google.com" />
        </Link>
        <Link href="" className={style.link}>
          <img src="/img/github-svg.svg" alt="github.com" />
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.block}>
          <MainInput
            onClick={ArrayErrorMessager}
            className={errors.userName || errorMessageName ? style.error : ''}
            validation={{ ...register('userName', Validate(ValidateField.Username)) }}
            placeholder="Epam"
            label={translate('username')}
          />
          {errors.userName && <p className={style.errorText}>{errors.userName.message}</p>}
          {errorMessageName ? <p className={style.errorText}>{errorMessageName.message}</p> : ''}
        </div>
        <div className={style.block}>
          <MainInput
            onClick={ArrayErrorMessager}
            className={errors.email || errorMessageEmail ? style.error : ''}
            validation={{ ...register('email', Validate(ValidateField.Email)) }}
            placeholder="Epam@epam.com"
            label={translate('email')}
          />
          {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
          {errorMessageEmail ? <p className={style.errorText}>{errorMessageEmail.message}</p> : ''}
        </div>
        <div className={style.block}>
          <PasswordInput
            onClick={ArrayErrorMessager}
            className={errors.password || errorMessagePassword ? style.error : ''}
            validation={{ ...register('password', Validate(ValidateField.Password)) }}
            placeholder="******************"
            label={translate('password')}
          />
          {errors.password && <p className={style.errorText}>{errors.password.message}</p>}
          {errorMessagePassword ? <p className={style.errorText}>{errorMessagePassword.message}</p> : ''}
        </div>
        <div className={style.block}>
          <PasswordInput
            onClick={ArrayErrorMessager}
            className={errors.password2 || errorMessagePassword ? style.error : ''}
            validation={{ ...register('password2', Validate(ValidateField.Password)) }}
            placeholder="******************"
            label={translate('password_confirmation')}
          />
          {errors.password2 && <p className={style.errorText}>{errors.password2.message}</p>}
          {errorMessagePassword ? <p className={style.errorText}>{errorMessagePassword.message}</p> : ''}
        </div>
        <div>
          <button className={style.button} onClick={handleSubmit(onSubmit)} disabled={disabled}>
            {translate('sign_up')}
          </button>
        </div>
      </form>
      <p>{translate('do_you_have_an_account?')}</p>
      <Link href={authRouts.login} className={style.SignIn}>
        {translate('sign_in')}
      </Link>
    </div>
  )
}
RegistrationForm.getLayout = getLayout
export default RegistrationForm
