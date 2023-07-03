import { FC, PropsWithChildren, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { MainInput } from '../../common/Inputs/Inputs'
import Link from 'next/link'
import style from './ForgotPassword.module.scss'
import { ValidateEmail } from './validate'
import { MainButton } from '@/components/common/Buttons/buttons'
import { usePasswordRecoverMutation } from '@/assets/api/auth/authApi'
import { Loading } from '@/components/common/loaders/Loading'
interface IFormInput {
  email: string
}

const ForgotPassword: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [serverError, setServerError] = useState('')
  const { register, handleSubmit, formState: { errors } }
    = useForm<IFormInput>({ mode: 'onSubmit' })
  const [PasswordRecoveryMutation, { isLoading }] = usePasswordRecoverMutation()
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { email } = data
    const recaptcha = '123456'
    try {
      const response = await PasswordRecoveryMutation({ email, recaptcha })
        .unwrap()
        .then((data) => {
          alert('Success')
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
          </div>

          <MainButton onClick={() => onSubmit} title='Create New Password' disabled={false} style={{ width: '100%', marginTop: '30px' }} />
          <Link className={style.link} href={'login'} >Back to Sign In</Link>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword