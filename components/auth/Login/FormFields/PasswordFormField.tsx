import React from 'react'
import style from '../LoginForm.module.scss'
import { PasswordInput } from '@/components/common/Inputs/Inputs'
import { Validate } from '../validate'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import { UseFormTrigger } from 'react-hook-form'
type FormValuesType = {
  email: string
  password: string
}
type PasswordFormFieldProps = {
  register: any
  errors: any
  serverError: string
  setServerError: Dispatch<SetStateAction<string>>
  trigger: UseFormTrigger<FormValuesType>
}

const PasswordFormField: React.FC<PasswordFormFieldProps> = ({ register, trigger, errors, serverError, setServerError }) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`login_form.${key}`)
  return (
    <div className={style.input_container}>
      <PasswordInput
        onBlurCapture={() => trigger('password')}
        className={errors.password ? style.error : ''}
        validation={{ ...register('password', Validate('password')) }}
        placeholder="******************"
        label={translate('password')}
        onClick={() => setServerError('')}
      />
      {errors.password && <p className={style.errorText}>{errors.password.message}</p>}
      {serverError && <p className={style.errorText}>{serverError}</p>}
    </div>
  )
}

export default PasswordFormField
