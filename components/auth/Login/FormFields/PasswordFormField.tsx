import React from 'react'
import * as Form from '@radix-ui/react-form'
import style from '../LoginForm.module.scss'
import { PasswordInput } from '@/components/common/Inputs/Inputs'
import { ValidatePassword } from '../validate'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'

type PasswordFormFieldProps = {
  register: any
  errors: any
  serverError: string
  setServerError: Dispatch<SetStateAction<string>>
}

const PasswordFormField: React.FC<PasswordFormFieldProps> = ({ register, errors, serverError, setServerError }) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`login_form.${key}`)
  return (
    <div className={style.input_container}>
      <PasswordInput
        className={errors.password ? style.error : ''}
        validation={{ ...register('password', ValidatePassword) }}
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
