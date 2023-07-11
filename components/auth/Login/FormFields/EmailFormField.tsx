import React, { Dispatch, SetStateAction } from 'react'
import style from '../LoginForm.module.scss'
import { MainInput } from '@/components/common/Inputs/Inputs'
import { ValidateEmail } from '../validate'
import { useTranslation } from 'react-i18next'

type EmailFormFieldProps = {
  register: any
  errors: any
  setServerError: Dispatch<SetStateAction<string>>
}

const EmailFormField: React.FC<EmailFormFieldProps> = ({ register, errors, setServerError }) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`login_form.${key}`)
  return (
    <div className={style.input_container}>
      <MainInput
        className={errors.email ? style.error : ''}
        validation={{ ...register('email', ValidateEmail) }}
        placeholder="Epam@epam.com"
        label={translate('email')}
      />
      {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
    </div>
  )
}

export default EmailFormField
