import React from 'react'
import style from '../LoginForm.module.scss'
import { ValidateEmail } from '../validate'

type EmailFormFieldProps = {
  register: any
  errors: any
}

const EmailFormField: React.FC<EmailFormFieldProps> = ({ register, errors }) => {
  return (
    <div className={style.input_container}>
      <label>Email</label>
      <input className={errors.email ? style.error : ''} {...register('email', ValidateEmail)} placeholder="Epam@epam.com" />
      {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
    </div>
  )
}

export default EmailFormField
