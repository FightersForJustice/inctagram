import { FC, PropsWithChildren } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import style from '../../Login/LoginForm.module.css'
import StyledInput from '../NewPassword/StyledInput'
import Link from 'next/link'
import passStyle from './ForgotPassword.module.scss'

interface IFormInput {
  email: string
}

const ForgotPassword: FC<PropsWithChildren<{}>> = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert('email sent')
  }
  return (
    <div className={style.mainContainer} style={{ fontFamily: 'inter, sans-serif' }}>
      <div className={style.form_wrapper}>
        <h1 style={{ color: 'white', fontWeight: '700', fontSize: '20px' }}>Forgot Password</h1>
        <form className={style.FormRoot} style={{ marginTop: '40px' }} onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            validation={{
              ...register('email', {
                required: true,
                pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
              })
            }}
            id="email"
            label={'Email'}
          />
          <div style={{ color: '#8d9094' }}>

            {errors.email && errors.email.type === 'required'
              && <p>Password field is empty</p>}
            {errors.email && errors.email.type === 'pattern'
              && (<p>Email is invalid</p>)}
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