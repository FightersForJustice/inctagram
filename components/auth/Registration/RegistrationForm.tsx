import style from './RegistrationForm.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { getLayout } from '@/components/Layout/Layout'
import { useRegistrationMutation } from '@/assets/api/auth/authApi'
import { ValidateUsername, ValidateEmail, ValidatePassword} from '../Login/validate'
import { Modal } from '@/components/common/Modal/modal'
import { Loading } from '@/components/common/loaders/Loading'
import { MainInput } from './imputPassword'
import { ErrorMessagerType, FormValuesType, PrintModalType } from './type'


const RegistrationForm = () => {
  const [arrayErrorMessager, setArrayErrorMessager] = useState<ErrorMessagerType[]>([])
  const [printModal, setPrintModal] = useState<PrintModalType>({ title: 'null', content: 'null' })
  const {register, handleSubmit, formState: { errors } } = useForm<FormValuesType>()
  const [registers, { isLoading }] = useRegistrationMutation()
  const onSubmit: SubmitHandler<FormValuesType> = async (data) => {
    if (data.password === data.password2) {
        registers(data)
          .unwrap()
          .then(() => {
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
    } else {
      setArrayErrorMessager([{field: "password", message: "* Passwords must match"}])
    }
  }
  const ArrayErrorMessager = () => setArrayErrorMessager([])
  const errorMessageEmail = arrayErrorMessager.find((obj) => obj.field === 'email')
  const errorMessageName = arrayErrorMessager.find((obj) => obj.field === 'name')
  const errorMessagePassword = arrayErrorMessager.find((obj) => obj.field === 'password')
  const disabled = Object.keys(errors).length === 0 ? false: true
  return (
        <div className={style.registration}>
          {printModal.title != "null"? <Modal title={printModal.title} content={printModal.content} onClick={() => {setPrintModal({ title: 'null', content: 'null' })}}/>:"" } 
          {isLoading &&         
          <div className={style.modal}>
            <Loading />
          </div>}
          <h1>Sign Up</h1>
          <div className={style.item}>
            <a href="" className={style.link}>
              <img src="/img/google-svg.svg" alt="google.com" />
            </a>
            <a href="" className={style.link}>
              <img src="/img/github-svg.svg" alt="github.com" />
            </a>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.block}>
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
            <div className={style.block}>
              <label>Email</label>
              <input
                onClick={ArrayErrorMessager}
                className={errors.email || errorMessageEmail ? style.error : ''}
                {...register('email', ValidateEmail)}
                placeholder="Epam@epam.com"
              />
              {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
              {errorMessageEmail ? <p className={style.errorText}>{errorMessageEmail.message}</p> : ''}
            </div>
            <div className={style.block}>
              <label>Password</label>
              <MainInput
                onClick={ArrayErrorMessager}
                className={errors.password || errorMessagePassword ? style.error : ''}
                validation={{...register('password', ValidatePassword)}}
                placeholder="******************"
              />
              {errors.password && <p className={style.errorText}>{errors.password.message}</p>}
              {errorMessagePassword ? <p className={style.errorText}>{errorMessagePassword.message}</p> : ''}
            </div>
            <div className={style.block}>
              <label>Password confirmation</label>
              <MainInput 
                onClick={ArrayErrorMessager}
                className={errors.password2 || errorMessagePassword ? style.error : ''}
                validation={{...register('password2', ValidatePassword )}}
                placeholder="******************"
              />
              {errors.password2 && <p className={style.errorText}>{errors.password2.message}</p>}
              {errorMessagePassword ? <p className={style.errorText}>{errorMessagePassword.message}</p> : ''}
            </div>
            <div>
              <input className={style.button} type="submit" value="Sign Up" disabled={disabled}/>
            </div>
          </form>
          <p>Do you have an account?</p>
          <a href="/auth/login" className={style.SignIn}>
            Sign In
          </a>
        </div>
  )
}
RegistrationForm.getLayout = getLayout
export default RegistrationForm
