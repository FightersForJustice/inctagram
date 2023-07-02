import { ChangeEvent, useState, FC, PropsWithChildren } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import style from '@/components/auth/Login/LoginForm.module.css'
import { PasswordInput } from '../../common/Inputs/Inputs'
import { ValidatePassword } from './validate'

interface IFormInput {
  password: string
  confirmPassword: string
}

const NewPassword: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { register, handleSubmit, clearErrors, formState: { errors } }
    = useForm<IFormInput>({ mode: 'onSubmit' })
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert('new password set')
    setPassword('')
    setConfirmPassword('')
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>, setValue: any) => {
    clearErrors()
    setValue(e.target.value)
  }
  return (
    <div className={style.mainContainer} style={{ fontFamily: 'inter, sans-serif' }}>
      <div className={style.form_wrapper}>
        <h1 style={{ color: 'white', fontWeight: '700', fontSize: '20px' }}>Create New Password</h1>
        <form className={style.FormRoot} style={{ marginTop: '40px' }} onSubmit={handleSubmit(onSubmit)}>
          <div style={{ position: 'relative', marginTop: '20px' }}>
            <PasswordInput
              validation={{
                ...register('password', {
                  ...ValidatePassword(confirmPassword),
                  onChange: (e) => handleChange(e, setPassword),
                })
              }}
              key='password'
              id="password"
              label='New password'
            />
          </div>
          <div style={{ position: 'relative', marginTop: '20px' }}>
            <PasswordInput
              validation={{
                ...register('confirmPassword', {
                  ...ValidatePassword(password),
                  onChange: (e) => handleChange(e, setConfirmPassword),
                })
              }}
              key='confirmPassword'
              id="confirmPassword"
              label='Password confirmation'
              style={errors.confirmPassword && errors.password && { border: '1px solid red' }}
            />
            {errors.confirmPassword && errors.password && <p style={{ color: 'red', float: 'left' }}>Error!</p>}
          </div>

           <div style={{ color: '#8d9094', marginTop: '20px' }}>
            {errors.password && errors.password.type === 'value' && <p>Passwords doesn't match</p>}
            {errors.password && errors.confirmPassword && <p>{errors.password.message}</p>}

            <input type="submit" style={{ fontSize: '16px', fontWeight: '600', marginTop: '20px' }} className={style.Button} value='Create New Password' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewPassword