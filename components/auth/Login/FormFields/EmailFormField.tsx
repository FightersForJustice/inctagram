import React, { Dispatch, SetStateAction } from 'react'
import style from '../LoginForm.module.scss'
import { ValidateEmail } from '../validate'

type EmailFormFieldProps = {
  register: any
  errors: any
  setServerError: Dispatch<SetStateAction<string>>
}

const EmailFormField: React.FC<EmailFormFieldProps> = ({ register, errors, setServerError }) => {
  return (
    <div className={style.input_container}>
      <label>Email</label>
      <input
        className={errors.email ? style.error : ''}
        {...register('email', ValidateEmail)}
        placeholder="Epam@epam.com"
        onClick={() => setServerError('')}
      />
      {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
    </div>
  )
}

export default EmailFormField
