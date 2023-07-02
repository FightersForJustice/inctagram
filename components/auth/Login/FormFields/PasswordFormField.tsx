import React from 'react'
import * as Form from '@radix-ui/react-form'
import style from '../LoginForm.module.scss'
import { ValidatePassword } from '../validate'

type PasswordFormFieldProps = {
  register: any
  errors: any
}

const PasswordFormField: React.FC<PasswordFormFieldProps> = ({ register, errors }) => {
  return (
    <div className={style.input_container}>
      <label>Password</label>
      <input
        className={errors.password ? style.error : ''}
        type="password"
        {...register('password', ValidatePassword)}
        placeholder="******************"
      />
      {errors.password && <p className={style.errorText}>{errors.password.message}</p>}
    </div>
  )
}

export default PasswordFormField
