import { FC, PropsWithChildren } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import style from '../Login/LoginForm.module.css'
import { MainInput } from '../../common/Inputs/Inputs'
import Link from 'next/link'
import passStyle from './ForgotPassword.module.scss'
import { ValidateEmail } from './validate'
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
    <div className={style.mainContainer} style={{ fontFamily: 'inter, sans-serif' }}>
      <div className={style.form_wrapper}>
        <h1 style={{ color: 'white', fontWeight: '700', fontSize: '20px' }}>Forgot Password</h1>
        <form className={style.FormRoot} style={{ marginTop: '40px' }} onSubmit={handleSubmit(onSubmit)}>
          <div style={{ position: 'relative', marginTop: '20px' }}>
            <MainInput
              validation={{
                ...register('email', ValidateEmail)
              }}
              id="email"
              label='Email'
              style={errors.email && { border: '1px solid red' }}
            />
            {errors.email && <p style={{ color: 'red', float: 'left' }}>Error!</p>}
          </div>
          <div style={{ color: '#8d9094' }}>

            {errors.email && <p>{errors.email.message}</p>}

            <input type="submit" style={{ fontSize: '16px', fontWeight: '600', marginTop: '20px' }}
              className={style.Button} value='Send Link' />
            <Link className={passStyle.link} href={'login'} >Back to Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword