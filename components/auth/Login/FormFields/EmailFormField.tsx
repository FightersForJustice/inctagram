import React, { Dispatch, SetStateAction } from 'react'
import style from '../LoginForm.module.scss'
import { MainInput } from '@/@ui/ui-kit/Inputs/Inputs'
import { Validate } from '../validate'
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
        validation={{ ...register('email', Validate('email')) }}
        placeholder="Epam@epam.com"
        label={translate('email')}
        errormessages={[errors.email?.message]}
      />
    </div>
  )
}

export default EmailFormField
