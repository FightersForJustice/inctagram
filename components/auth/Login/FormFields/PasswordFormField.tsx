import React from 'react'
import style from '../LoginForm.module.scss'
import { PasswordInput } from '@/@ui/ui-kit/Inputs/Inputs'
import { Validate } from '../validate'
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
        validation={{ ...register('password', Validate('password')) }}
        placeholder="******************"
        label={translate('password')}
        onClick={() => setServerError('')}
        errormessages={[errors.password?.message, serverError]}
      />
    </div>
  )
}

export default PasswordFormField
