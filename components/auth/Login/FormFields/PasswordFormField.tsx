import React, { useEffect } from 'react'
import style from '../LoginForm.module.scss'
import { PasswordInput } from '@/components/common/Inputs/Inputs'
import { Validate, ValidateField } from '../validate'
import { useTranslation } from 'react-i18next'
import { PasswordFormFieldProps } from '../type'



const PasswordFormField: React.FC<PasswordFormFieldProps> = ({ register, trigger, errors, serverError, setServerError }) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`login_form.${key}`)
  useEffect(() => {
    Object.keys(errors).forEach((fieldName: any) => {
      trigger(fieldName);
    });
  }, [t])
  return (
    <div className={style.input_container}>
      <PasswordInput
        onBlurCapture={() => trigger('password')}
        className={errors.password ? style.error : ''}
        validation={{ ...register('password', Validate(ValidateField.Password)) }}
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
