import { MainInput } from '../../common/Inputs/Inputs'
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
          style={errors.email && { border: '1px solid red' }}
        />
        {errors.email && <p style={{ color: 'red', float: 'left' }}>Error!</p>}
      </div>
      <div className={style.error_message}>
        {errors.email && <p>{errors.email.message && translate(errors.email.message)}</p>}
        {errors.recaptcha && <p>{errors.recaptcha.message}</p>}
        {serverError}
      </div>
    </>
  )
}

export default ForgotPasswordInput
