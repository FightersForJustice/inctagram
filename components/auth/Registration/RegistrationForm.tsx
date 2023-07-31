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
            validation={{ ...register('userName', Validate('username')) }}
            placeholder="Epam"
            label={translate('username')}
            errormessages={[errors.userName?.message, errorMessageName?.message]}
          />
        </div>
        <div className={style.block}>
          <MainInput
            onClick={ArrayErrorMessager}
            validation={{ ...register('email', Validate('email')) }}
            placeholder="Epam@epam.com"
            label={translate('email')}
            errormessages={[errors.email?.message, errorMessageEmail?.message]}
          />
        </div>
        <div className={style.block}>
          <PasswordInput
            onClick={ArrayErrorMessager}
            validation={{ ...register('password', Validate('password')) }}
            placeholder="******************"
            label={translate('password')}
            errormessages={[errors.password?.message, errorMessagePassword?.message]}
          />
        </div>
        <div className={style.block}>
          <PasswordInput
            onClick={ArrayErrorMessager}
            validation={{ ...register('password2', Validate('password')) }}
            placeholder="******************"
            label={translate('password_confirmation')}
            errormessages={[errors.password2?.message, errorMessagePassword?.message]}
          />
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
