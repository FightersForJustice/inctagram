import Link from 'next/link'
import style from './RegistrationForm.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { getLayout } from '@/components/Layout/Layout'
import { useRegistrationMutation } from '@/assets/api/auth/authApi'
import { ValidateUsername, ValidateImail, ValidatePassword, ValidatePassword2 } from './validate'
import { Modal } from '@/components/common/Modal/modal'

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
          <img className={style.img} src="/img/Loading.svg" alt="github.com" />
        </div>
      )}
      <h1>Sign Up</h1>
      <div className={style.item}>
        <Link href="" className={style.link}>
          <img src="/img/google-svg.svg" alt="google.com" />
        </Link>
        <Link href="" className={style.link}>
          <img src="/img/github-svg.svg" alt="github.com" />
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input
            onClick={ArrayErrorMessager}
            className={errors.userName || errorMessageName ? style.error : ''}
            {...register('userName', ValidateUsername)}
            placeholder="Epam"
          />
          {errors.userName && <p className={style.errorText}>{errors.userName.message}</p>}
          {errorMessageName ? <p className={style.errorText}>{errorMessageName.message}</p> : ''}
        </div>
        <div>
          <label>Email</label>
          <input
            onClick={ArrayErrorMessager}
            className={errors.email || errorMessageEmail ? style.error : ''}
            {...register('email', ValidateImail)}
            placeholder="Epam@epam.com"
          />
          {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
          {errorMessageEmail ? <p className={style.errorText}>{errorMessageEmail.message}</p> : ''}
        </div>
        <div>
          <label>Password</label>
          <input
            onClick={onClickPassword}
            className={errors.password || errorMessagePassword ? style.error : ''}
            type="password"
            {...register('password', ValidatePassword)}
            placeholder="******************"
          />
          {errors.password && <p className={style.errorText}>{errors.password.message}</p>}
          {errorMessagePassword ? <p className={style.errorText}>{errorMessagePassword.message}</p> : ''}
        </div>
        <div>
          <label>Password confirmation</label>
          <input
            onClick={onClickPassword}
            className={errorMessagePassword ? style.error : ''}
            type="password"
            {...register('password2', ValidatePassword2)}
            placeholder="******************"
          />
          {password != '' ? <p className={style.errorText}>{password}</p> : ''}
          {errorMessagePassword ? <p className={style.errorText}>{errorMessagePassword.message}</p> : ''}
        </div>
        <div>
          <input className={style.button} type="submit" value="Sign Up" />
        </div>
      </form>
      <p>Do you have an account?</p>
      <Link href="/auth/login" className={style.SignIn}>
        Sign In
      </Link>
    </div>
  )
}
RegistrationForm.getLayout = getLayout
export default RegistrationForm
