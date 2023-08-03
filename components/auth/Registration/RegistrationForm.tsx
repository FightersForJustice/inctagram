import style from './RegistrationForm.module.scss'
import { useForm } from 'react-hook-form'
import { getLayout } from '@/components/Layout/Layout'
import { Validate } from '../Login/validate'
import { Loading } from '@/components/common/Loaders/Loading'
import { FormValuesType, RegistrationPropsType } from './type'
import { PasswordInput, MainInput } from '@/@ui/ui-kit/Inputs/Inputs'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { authRouts } from '@/components/common/Auth/authRoutes'
import authStyle from '@/@ui/design/settings/commonAuth.module.scss'
import { Button } from '@/@ui/ui-kit/Button/Button'
import classNames from 'classnames'
import { AuthLogoGroup } from '@/components/common/Auth/LogoGroup'

const RegistrationForm = (props: RegistrationPropsType) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`registration_form.${key}`)
  const { onSubmit, isLoading, errorMessageEmail, errorMessageName, errorMessagePassword, ArrayErrorMessager } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesType>()
  const disabled = Object.keys(errors).length === 0 ? false : true
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
            validation={{ ...register('userName', Validate('username')) }}
            placeholder="Epam"
            label={translate('username')}
            errormessages={[errors.userName?.message, errorMessageName?.message]}
          />
        </div>
        <div className={style.inputWrapper}>
          <MainInput
            onClick={ArrayErrorMessager}
            validation={{ ...register('email', Validate('email')) }}
            placeholder="Epam@epam.com"
            label={translate('email')}
            errormessages={[errors.email?.message, errorMessageEmail?.message]}
          />
        </div>
        <div className={style.inputWrapper}>
          <PasswordInput
            onClick={ArrayErrorMessager}
            validation={{ ...register('password', Validate('password')) }}
            placeholder="******************"
            label={translate('password')}
            errormessages={[errors.password?.message, errorMessagePassword?.message]}
          />
        </div>
        <div className={style.inputWrapper}>
          <PasswordInput
            onClick={ArrayErrorMessager}
            validation={{ ...register('password2', Validate('password')) }}
            placeholder="******************"
            label={translate('password_confirmation')}
            errormessages={[errors.password2?.message, errorMessagePassword?.message]}
          />
        </div>
        <div className={style.buttonWrapper}>
          <Button onClick={handleSubmit(onSubmit)} disabled={disabled} text={translate('sign_up')} />
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
