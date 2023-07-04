import { MainInput } from '../../common/Inputs/Inputs'
import Link from 'next/link'
import style from './ForgotPassword.module.scss'
import { ValidateEmail } from './validate'
import { MainButton } from '@/components/common/Buttons/buttons'
import { Loading } from '@/components/common/loaders/Loading'
import ReCAPTCHA from 'react-google-recaptcha'
import { IForgotPasswordProps } from './ForgotPasswordTypes'

const ForgotPassword = (props: IForgotPasswordProps) => {
  const { siteKey, isLoading, errors, serverError, handleSubmit, register, onSubmit, onChange } = props

  return (
    <div className={style.mainContainer}>
      <div className={style.form_wrapper}>
        {isLoading && <div className={style.modal}><Loading /></div>}
        <h1 className={style.header}>Forgot Password</h1>
        <form className={style.FormRoot} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.input_wrapper}>
            <MainInput
              validation={{ ...register('email', ValidateEmail) }}
              id="email"
              label='Email'
              style={errors.email && { border: '1px solid red' }}/>
            {errors.email && <p style={{ color: 'red', float: 'left' }}>Error!</p>}
          </div>
          <div className={style.error_message}>
            {errors.email && <p>{errors.email.message}</p>}
            {errors.recaptcha && <p>{errors.recaptcha.message}</p>}
            {serverError}
          </div>

          <MainButton
            onClick={() => 1 - 1}
            title='Create New Password'
            disabled={false}
            style={{ width: '100%', marginTop: '30px' }} />

          <Link className={style.link} href={'login'} >Back to Sign In</Link>

          <div className={style.recaptcha_wrapper}>
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={onChange}
              className={style.recaptcha}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword