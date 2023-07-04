import { FC, PropsWithChildren } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import style from '../Login/LoginForm.module.css'
import { MainInput } from '../../common/Inputs/Inputs'
import Link from 'next/link'
import passStyle from './ForgotPassword.module.scss'
import { MainButton } from '@/components/common/Buttons/buttons'

interface IFormInput {
  email: string
}

const ForgotPassword: FC<PropsWithChildren<{}>> = ({ children }) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onSubmit' })
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert('email sent')
  }
  return (
    <div className={style.mainContainer} style={{ fontFamily: 'inter, sans-serif' }}>
      <div className={style.form_wrapper}>
        <h1 style={{ color: 'white', fontWeight: '700', fontSize: '20px' }}>Forgot Password</h1>
        <form className={style.FormRoot} style={{ marginTop: '40px' }} onSubmit={handleSubmit(onSubmit)}>
          <div style={{ position: 'relative', marginTop: '20px' }}>
            <MainInput
              validation={{
                ...register('email', {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                }),
              }}
              id="email"
              label="Email"
              style={errors.email && { border: '1px solid red' }}
            />
            {errors.email && <p style={{ color: 'red', float: 'left' }}>Error!</p>}
          </div>
          <div style={{ color: '#8d9094' }}>
            {errors.email && errors.email.type === 'required' && <p>Password field is empty</p>}
            {errors.email && errors.email.type === 'pattern' && <p>Email is invalid</p>}
            <MainButton title="Send Link" onClick={handleSubmit(onSubmit)} disabled={false} style={{ width: '376px' }} />
            <Link className={passStyle.link} href={'login'}>
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
