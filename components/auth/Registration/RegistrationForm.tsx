import style from './RegistrationForm.module.scss'
import { useForm } from 'react-hook-form'
import { getLayout } from '@/components/Layout/Layout'
import { Validate, ValidateField, confirmPassword } from '../Login/validate'
import { Loading } from '@/components/common/Loaders/Loading'
import { FormValuesTypeRegister, RegistrationPropsType } from './type'
import { PasswordInput, MainInput } from '@/@ui/ui-kit/Inputs/Inputs'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { authRouts } from '@/components/common/Auth/authRoutes'
import authStyle from '@/@ui/design/settings/commonAuth.module.scss'
import { Button } from '@/@ui/ui-kit/Button/Button'
import classNames from 'classnames'
import { AuthLogoGroup } from '@/components/common/Auth/LogoGroup'
import { useEffect, useState } from 'react'
import { errorsTrigger } from '@/hooks/errorsTrigger'
import { legalRoutes } from '@/app/routes/legalRoutes'
import { CheckBox } from '@/@ui/ui-kit/CheckBox/CheckBox'

const RegistrationForm = (props: RegistrationPropsType) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`registration_form.${key}`)
  const { onSubmit, isLoading, errorMessageEmail, errorMessageName, errorMessagePassword, ArrayErrorMessager } = props
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm<FormValuesTypeRegister>({ mode: 'onBlur' })

  useEffect(() => {
    errorsTrigger(trigger, errors)
  }, [t])
  const errorCheckbox = errors.checkbox === undefined ? false : true
  return (
    <div className={authStyle.authContainer}>
      {isLoading && (
        <div className={authStyle.loading}>
          <Loading />
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className={authStyle.authForm}>
        <h1 className={classNames(authStyle.header, style.header)}>{translate('sign_up')}</h1>
        <div className={style.logoWrapper}>
          <AuthLogoGroup />
        </div>
        <div className={style.inputWrapper}>
          <MainInput
            onClick={ArrayErrorMessager}
            validation={{ ...register('userName', Validate(ValidateField.Username)) }}
            placeholder="Epam"
            label={translate('username')}
            errormessages={[errors.userName?.message, errorMessageName?.message]}
          />
        </div>
        <div className={style.inputWrapper}>
          <MainInput
            onClick={ArrayErrorMessager}
            validation={{ ...register('email', Validate(ValidateField.Email)) }}
            placeholder="Epam@epam.com"
            label={translate('email')}
            errormessages={[errors.email?.message, errorMessageEmail?.message]}
          />
        </div>
        <div className={style.inputWrapper}>
          <PasswordInput
            onClick={ArrayErrorMessager}
            validation={{ ...register('password', Validate(ValidateField.Password)) }}
            placeholder="******************"
            label={translate('password')}
            errormessages={[errors.password?.message, errorMessagePassword?.message]}
          />
        </div>
        <div className={style.inputWrapper}>
          <PasswordInput
            onClick={ArrayErrorMessager}
            validation={{ ...register('password2', { validate: (value) => confirmPassword(value, watch) }) }}
            placeholder="******************"
            label={translate('password_confirmation')}
            errormessages={[errors.password2?.message, errorMessagePassword?.message]}
          />
        </div>

        <div className={style.checkboxWrapper}>
          <CheckBox value="yes" validation={{ ...register('checkbox', Validate(ValidateField.Checkbox)) }} error={errorCheckbox}>
            <span className={style.text}>
              {translate('legal')}
              <Link href={legalRoutes.termsOfService} className={style.link}>
                {translate('termsOfService')}
              </Link>
              {translate('and')}
              <Link href={legalRoutes.privacyPolicy} className={style.link}>
                {translate('privacyPolicy')}
              </Link>
            </span>
          </CheckBox>
          <div className={style.errorCheckbox}>{errors.checkbox?.message}</div>
        </div>

        <div className={style.buttonWrapper}>
          <Button onClick={handleSubmit(onSubmit)} text={translate('sign_up')} />
        </div>
        <p className={style.text}>{translate('do_you_have_an_account?')}</p>
        <Link href={authRouts.login} className={style.SignIn}>
          {translate('sign_in')}
        </Link>
      </form>
    </div>
  )
}
RegistrationForm.getLayout = getLayout
export default RegistrationForm
