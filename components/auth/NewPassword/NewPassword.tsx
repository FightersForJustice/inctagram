import { ChangeEvent, useState, FC, PropsWithChildren } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import style from './NewPassword.module.scss'
import { PasswordInput } from '../../common/Inputs/Inputs'
import { ValidatePassword } from './validate'
import { MainButton } from '@/components/common/Buttons/buttons'
import { useRouter } from 'next/router'

interface IFormInput {
  password: string
  confirmPassword: string
}

const NewPassword: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { register, handleSubmit, clearErrors, formState: { errors } }
    = useForm<IFormInput>({ mode: 'onSubmit' })
  const router = useRouter();
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const code = router.query["code"];
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
    <div className={style.mainContainer}>
      <div className={style.form_wrapper}>
        <h1 className={style.header}>Create New Password</h1>
        <form className={style.FormRoot} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.input_wrapper}>
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
              placeholder='****************'
            />
          </div>
          <div className={style.input_wrapper}>
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
              placeholder='***************'
              style={errors.confirmPassword && errors.password && { border: '1px solid red' }}
            />
            {errors.confirmPassword && errors.password && <p style={{ color: 'red', float: 'left' }}>Error!</p>}
          </div>

          <div className={style.error_message}>
            {errors.password && errors.password.type === 'value' && <p>Passwords doesn't match</p>}
            {errors.password && errors.confirmPassword && <p>{errors.password.message}</p>}
          </div>
            <MainButton onClick={() => onSubmit} title='Create New Password' disabled={false} style={{width:'100%', marginTop: '30px'}}/>
        </form>
      </div>
    </div>
  )
}

export default NewPassword