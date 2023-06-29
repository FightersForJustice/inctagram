import { ChangeEvent, useState, FC, PropsWithChildren } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import style from '../Login/LoginForm.module.css'
import StyledInput, { StyledInputPassword } from './StyledInput'

interface IFormInput {
  password: string
  confirmPassword: string
}

const NewPassword: FC<PropsWithChildren<{}>> = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert('new password set')
    setPassword('')
    setConfirmPassword('')
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>, setValue: any) => {
    setValue(e.target.value)
  }
  return (
    <div className={style.mainContainer} style={{ fontFamily: 'inter, sans-serif' }}>
      <div className={style.form_wrapper}>
        <h1 style={{ color: 'white', fontWeight: '700', fontSize: '20px' }}>Create New Password</h1>
        <form className={style.FormRoot} style={{ marginTop: '40px' }} onSubmit={handleSubmit(onSubmit)}>
          <StyledInputPassword
            validation={{
              ...register('password', {
                required: true,
                maxLength: 20,
                minLength: 6,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                onChange: (e) => handleChange(e, setPassword),
                validate: (v) => v === confirmPassword,
              })
            }}
            id="password"
            label={'New password'}
          />
          <StyledInputPassword
            validation={{...register('confirmPassword', {
                required: true,
                maxLength: 20,
                minLength: 6,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                onChange: (e) => handleChange(e, setConfirmPassword),
                validate: (v) => v === password,
              })
            }}
            id="confirmPassword"
            label={'Password confirmation'}
          />
          <div style={{ color: '#8d9094' }}>
            {errors.confirmPassword && (errors.confirmPassword.type === 'minLength' || errors.confirmPassword.type === 'maxLength') && (
              <p>Your password must be between 6 and 20 characters</p>
            )}
            {errors.confirmPassword && errors.password && errors.confirmPassword.type === 'required' && <p>Password field is empty</p>}
            {errors.confirmPassword && errors.password && errors.confirmPassword.type === 'validate' && <p>Passwords doesn't match</p>}
            {errors.confirmPassword && errors.confirmPassword.type === 'pattern' && (
              <p>Your password must contain at least one number and one character</p>
            )}
            <input type="submit" style={{ fontSize: '16px', fontWeight: '600', marginTop: '20px' }} className={style.Button} value='Create New Password' />

          </div>
        </form>
      </div>
    </div>
  )
}

export default NewPassword