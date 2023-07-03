import { FC, PropsWithChildren } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import commonStyle from '../Login/LoginForm.module.css'
import { MainInput } from '../../common/Inputs/Inputs'
import Link from 'next/link'
import style from './ForgotPassword.module.scss'
import { ValidateEmail } from './validate'
import { MainButton } from '@/components/common/Buttons/buttons'
interface IFormInput {
  email: string
}

const ForgotPassword: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { register, handleSubmit, formState: { errors } }
    = useForm<IFormInput>({ mode: 'onSubmit' })
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert('email sent')
  }
  return (
    <div className={style.mainContainer}>
      <div className={style.form_wrapper}>
        <h1 className={style.header}>Forgot Password</h1>
        <form className={style.FormRoot} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.input_wrapper}>
            <MainInput
              validation={{ ...register('email', ValidateEmail) }}
              id="email"
              label='Email'
              style={errors.email && { border: '1px solid red' }}
            />
            {errors.email && <p style={{ color: 'red', float: 'left' }}>Error!</p>}
          </div>
          <div className={style.error_message}>
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <MainButton onClick={() => onSubmit} title='Create New Password' disabled={false} style={{ width: '100%', marginTop: '30px' }} />
          <Link className={style.link} href={'login'} >Back to Sign In</Link>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword