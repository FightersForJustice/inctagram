import { MainInput } from '../../../@ui/ui-kit/Inputs/Inputs'
import style from './ForgotPassword.module.scss'
import { ValidateEmail } from './validate'
import { IForgotPasswordInputProps } from './forgotPasswordTypes'
import { useTranslation } from 'react-i18next'

const ForgotPasswordInput = (props: IForgotPasswordInputProps) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`forgot_password.${key}`)
  const { errors, serverError, register } = props

  return (
    <>
      <div className={style.input_wrapper}>
        <MainInput
          validation={{ ...register('email', ValidateEmail) }}
          id="email"
          label={translate('email')}
          placeholder="Epam@epam.com"
        />
      </div>
      {errors?.email || errors?.recaptcha ? (
        <div className={style.error_message}>
          {errors.email?.message && <p>{translate(errors.email.message)}</p>}
          {errors.recaptcha?.message && <p>{translate(errors.recaptcha.message)}</p>}
        </div>
      ) : null}
    </>
  )
}

export default ForgotPasswordInput
