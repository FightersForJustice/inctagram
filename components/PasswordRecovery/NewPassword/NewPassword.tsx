import { ChangeEvent, useState, FC, PropsWithChildren } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import style from '../../Login/LoginForm.module.css'
import { StyledInputPassword } from './StyledInput'

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
          <div style={{ position: 'relative', marginTop: '20px' }}>
            <label style={{ color: '#8d9094', position: 'absolute', top: '-20px', left: '0px' }}>
              New password
            </label>
            <StyledInputPassword
              validation={{
                ...register('password', {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                  pattern: /^\S+$/,
                  onChange: (e) => handleChange(e, setPassword),
                  validate: (v) => v === confirmPassword,
                })
              }}
              id="password"
            />
          </div>
          <div style={{ position: 'relative', marginTop: '20px' }}>
            <label style={{ color: '#8d9094', position: 'absolute', top: '-20px', left: '0px' }}> Password confirmation</label>
            <StyledInputPassword
              validation={{
                ...register('confirmPassword', {
                  required: true,
                  maxLength: 20,
                  minLength: 6,
                  pattern: /^\S+$/,
                  onChange: (e) => handleChange(e, setConfirmPassword),
                  validate: (v) => v === password,
                })
              }}
              id="confirmPassword"
            />
          </div>
          <div style={{ color: '#8d9094' }}>
            {errors.confirmPassword && (errors.confirmPassword.type === 'minLength' || errors.confirmPassword.type === 'maxLength') && (
              <p>Your password must be between 6 and 20 characters</p>
            )}
            {errors.confirmPassword && errors.password && errors.confirmPassword.type === 'required' && <p>Password field is empty</p>}
            {errors.confirmPassword && errors.password && errors.confirmPassword.type === 'validate' && <p>Passwords doesn't match</p>}
            {errors.confirmPassword && errors.confirmPassword.type === 'pattern' && (
              <p>Password is invalid</p>
            )}
            <input type="submit" style={{ fontSize: '16px', fontWeight: '600', marginTop: '20px' }} className={style.Button} value='Create New Password' />

          </div>
        </form>
      </div>
    </div>
  )
}

export default NewPassword