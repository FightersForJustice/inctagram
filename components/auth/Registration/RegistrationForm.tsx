import style from './RegistrationForm.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { getLayout } from '@/components/Layout/Layout'
import { useRegistrationMutation } from '@/assets/api/auth/authApi'
import { ValidateUsername, ValidateImail, ValidatePassword, ValidatePassword2 } from './validate'
import { Modal } from '@/components/common/Modal/modal'
import { MainInput, PasswordInput } from '@/components/common/Inputs/Inputs'
import { AuthLogoGroup } from '@/components/common/Auth/logo-group'
import { Loading } from '@/components/common/loaders/Loading'
import { MainButton } from '@/components/common/Buttons/buttons'
import Link from 'next/link'
import { authRouts } from '@/components/common/Auth/authRouts'

type FormValuesType = {
  userName: string
  email: string
  password: string
  password2: string
}
type ErrorMessagerType = {
  field: string
  message: string
}
type PrintModalType = {
  title: string
  content: string
}
const RegistrationForm = () => {
  const [arrayErrorMessager, setArrayErrorMessager] = useState<ErrorMessagerType[]>([])
  const [printModal, setPrintModal] = useState<PrintModalType>({ title: 'null', content: 'null' })
  const [password, setPassword] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValuesType>()
  const [registers, { isLoading }] = useRegistrationMutation()
  const onSubmit: SubmitHandler<FormValuesType> = async (data) => {
    if (data.password === data.password2) {
      try {
        registers(data)
          .unwrap()
          .then(() => {
            localStorage.setItem('userEmail', data.email)
            setPrintModal({ title: 'Email sent', content: 'We have sent a link to confirm your email to ' + data.email })
          })

          .catch((error: any) => {
            console.log(error.status)
            if (error.status == 'FETCH_ERROR') {
              setPrintModal({ title: 'Error', content: 'error' })
            }
            if (typeof error.data != 'undefined') {
              setArrayErrorMessager(error.data.messages)
            }
          })
      } catch (error) {
        console.error('Ошибка регистрации:', error)
      }
    } else {
      setPassword('* Passwords must match')
    }
  }
  const ArrayErrorMessager = () => setArrayErrorMessager([])
  const onClickPassword = () => {
    setArrayErrorMessager([])
    setPassword('')
  }
  const errorMessageEmail = arrayErrorMessager.find((obj) => obj.field === 'email')
  const errorMessageName = arrayErrorMessager.find((obj) => obj.field === 'name')
  const errorMessagePassword = arrayErrorMessager.find((obj) => obj.field === 'password')

  return (
    <div className={style.registration}>
      {printModal.title != 'null' ? <Modal title={printModal.title} content={printModal.content} /> : ''}
      {isLoading && (
        <div className={style.modal}>
          <Loading />
        </div>
      )}
      <h1>Sign Up</h1>
      <AuthLogoGroup />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <MainInput
            onClick={ArrayErrorMessager}
            className={errors.userName || errorMessageName ? style.error : ''}
            validation={{ ...register('userName', ValidateUsername) }}
            placeholder="Epam"
            label="Username"
          />
          {errors.userName && <p className={style.errorText}>{errors.userName.message}</p>}
          {errorMessageName ? <p className={style.errorText}>{errorMessageName.message}</p> : ''}
        </div>
        <div>
          <MainInput
            onClick={ArrayErrorMessager}
            className={errors.email || errorMessageEmail ? style.error : ''}
            validation={{ ...register('email', ValidateImail) }}
            placeholder="Epam@epam.com"
            label="Email"
          />
          {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
          {errorMessageEmail ? <p className={style.errorText}>{errorMessageEmail.message}</p> : ''}
        </div>
        <div>
          <PasswordInput
            onClick={onClickPassword}
            className={errors.password || errorMessagePassword ? style.error : ''}
            validation={{ ...register('password', ValidatePassword) }}
            placeholder="******************"
            label="Password"
          />
          {errors.password && <p className={style.errorText}>{errors.password.message}</p>}
          {errorMessagePassword ? <p className={style.errorText}>{errorMessagePassword.message}</p> : ''}
        </div>
        <div>
          <PasswordInput
            onClick={onClickPassword}
            className={errorMessagePassword ? style.error : ''}
            validation={{ ...register('password2', ValidatePassword2) }}
            placeholder="******************"
            label="Password confirmation"
          />
          {password != '' ? <p className={style.errorText}>{password}</p> : ''}
          {errorMessagePassword ? <p className={style.errorText}>{errorMessagePassword.message}</p> : ''}
        </div>
        <div>
          <MainButton title="Sign Up" disabled={isLoading} onClick={handleSubmit(onSubmit)} />
        </div>
      </form>
      <p>Do you have an account?</p>
      <Link href={authRouts.login} className={style.SignIn}>
        Sign In
      </Link>
    </div>
  )
}
RegistrationForm.getLayout = getLayout
export default RegistrationForm
