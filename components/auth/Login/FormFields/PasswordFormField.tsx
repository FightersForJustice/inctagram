import React from 'react'
import * as Form from '@radix-ui/react-form'
import style from '../LoginForm.module.scss'
import { ValidatePassword } from '../validate'
import { Dispatch } from 'react'
import { SetStateAction } from 'react'

type PasswordFormFieldProps = {
  register: any
  errors: any
  serverError: string
  setServerError: Dispatch<SetStateAction<string>>
}

const PasswordFormField: React.FC<PasswordFormFieldProps> = ({ register, errors, serverError, setServerError }) => {
  return (
    <div className={style.input_container}>
      <label>Password</label>
      <input
        className={errors.password ? style.error : ''}
        type="password"
        {...register('password', ValidatePassword)}
        placeholder="******************"
        onClick={() => setServerError('')}
      />
      {errors.password && <p className={style.errorText}>{errors.password.message}</p>}
      {serverError && <p className={style.errorText}>{serverError}</p>}
    </div>
  )
}

export default PasswordFormField
