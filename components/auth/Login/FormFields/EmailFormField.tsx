import React from 'react'
import style from '../LoginForm.module.scss'
import { MainInput } from '@/components/common/Inputs/Inputs'
import { Validate, ValidateField } from '../validate'
import { useTranslation } from 'react-i18next'
import { EmailFormFieldProps } from '../type'


const EmailFormField: React.FC<EmailFormFieldProps> = ({ register, errors }) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`login_form.${key}`)

  return (
    <div className={style.input_container}>
      <MainInput
        className={errors.email ? style.error : ''}
        validation={{ ...register('email', Validate(ValidateField.Email)) }}
        placeholder="Epam@epam.com"
        label={translate('email')}
      />
      {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
    </div>
  )
}

export default EmailFormField
