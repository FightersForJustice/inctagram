import React, { Dispatch, SetStateAction } from 'react'
import style from '../LoginForm.module.scss'
import { MainInput } from '@/components/common/Inputs/Inputs'
import { Validate } from '../validate'
import { useTranslation } from 'react-i18next'
import { UseFormTrigger } from 'react-hook-form'
type FormValuesType = {
  email: string
  password: string
}
type EmailFormFieldProps = {
  register: any
  errors: any
  setServerError: Dispatch<SetStateAction<string>>
  trigger: UseFormTrigger<FormValuesType>
}

const EmailFormField: React.FC<EmailFormFieldProps> = ({ register, trigger, errors, setServerError }) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`login_form.${key}`)
  return (
    <div className={style.input_container}>
      <MainInput
        onBlurCapture={() => trigger('email')}
        className={errors.email ? style.error : ''}
        validation={{ ...register('email', Validate('email')) }}
        placeholder="Epam@epam.com"
        label={translate('email')}
      />
      {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
    </div>
  )
}

export default EmailFormField
