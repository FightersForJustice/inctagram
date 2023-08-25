import React from 'react'
import style from '../LoginForm.module.scss'
import { PasswordInput } from '@/@ui/ui-kit/Inputs/Inputs'
import { Validate, ValidateField } from '../validate'
import { useTranslation } from 'react-i18next'
import { PasswordFormFieldProps } from '../type'

const PasswordFormField: React.FC<PasswordFormFieldProps> = ({ register, errors, serverError, setServerError }) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`login_form.${key}`)
  return (
    <div className={style.input_container}>
      <PasswordInput
        validation={{ ...register('password', Validate(ValidateField.Password)) }}
        placeholder="******************"
        label={translate('password')}
        onClick={() => setServerError('')}
        errormessages={[errors.password?.message, serverError]}
      />
    </div>
  )
}

export default PasswordFormField
