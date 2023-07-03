import { FC, PropsWithChildren, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { MainInput } from '../../common/Inputs/Inputs'
import Link from 'next/link'
import style from './ForgotPassword.module.scss'
import { ValidateEmail } from './validate'
import { MainButton } from '@/components/common/Buttons/buttons'
import { usePasswordRecoverMutation } from '@/assets/api/auth/authApi'
import { Loading } from '@/components/common/loaders/Loading'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRouter } from 'next/router'
interface IFormInput {
  email: string
  recaptcha: string
}

const ForgotPassword: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { push } = useRouter();
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY!
  const [serverError, setServerError] = useState('')
  const [recaptchaCode, setRecaptchaCode] = useState('')
  const { register, handleSubmit, setError, clearErrors, formState: { errors } }
    = useForm<IFormInput>({ mode: 'onSubmit' })
  const [PasswordRecoveryMutation, { isLoading }] = usePasswordRecoverMutation()
  const onChange = (value: any) => {
    console.log("Captcha value:", value);
    setRecaptchaCode(value)
    clearErrors()
  }
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!recaptchaCode) {
      setError("recaptcha", {
        type: "manual",
        message: "captcha is empty",
      })
  
      return };
    const { email } = data
    const recaptcha = recaptchaCode
    try {
      const response = await PasswordRecoveryMutation({ email, recaptcha })
        .unwrap()
        .then((data) => {
          alert('Success')
          console.log(data)
          push('/MainPage');  
        })
        .catch((error: any) => {
          setServerError(
            error.data.error === 'Bad Request'
              ? 'Incorrect email or reCaptcha'
              : error.data.error
          )
          if (error.status == 'FETCH_ERROR') {
            alert('Server Error')
          }
          if (typeof error.data != 'undefined') {
            console.log(error.data.messages[0].message)
          }
        })  
    } catch (error) {
      console.error('Failed recover:', error)
    }
  }
  return (
    <div className={style.mainContainer}>
      <div className={style.form_wrapper}>
        {isLoading && (
          <div className={style.modal}>
            <Loading />
          </div>
        )}
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
            {serverError}
            {errors.recaptcha && <p>{errors.recaptcha.message}</p>}
          </div>

          <MainButton onClick={() => onSubmit} title='Create New Password' disabled={false} style={{ width: '100%', marginTop: '30px' }} />
          <Link className={style.link} href={'login'} >Back to Sign In</Link>
          <div className={style.recaptcha_wrapper}>
          <ReCAPTCHA
            sitekey={siteKey}
            onChange={onChange}
            className={style.recaptcha}
          />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword