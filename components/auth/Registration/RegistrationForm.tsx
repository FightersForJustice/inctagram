import style from './RegistrationForm.module.scss'
import { useForm } from 'react-hook-form'
import { getLayout } from '@/components/Layout/Layout'
import { ValidateUsername, ValidateEmail, ValidatePassword } from '../Login/validate'
import { Loading } from '@/components/common/loaders/Loading'
import { MainInput } from './imputPassword'
import { FormValuesType, RegistrationPropsType } from './type'

const RegistrationForm = (props: RegistrationPropsType) => {
  const { onSubmit, isLoading, errorMessageEmail, errorMessageName, errorMessagePassword, ArrayErrorMessager } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValuesType>()
  const disabled = Object.keys(errors).length === 0 ? false : true
  return (
    <div className={style.registration}>
      {isLoading && (
        <div className={style.modal}>
          <Loading />
        </div>
      )}
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
            validation={{ ...register('password', ValidatePassword) }}
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
            validation={{ ...register('password2', ValidatePassword) }}
            placeholder="******************"
          />
          {errors.password2 && <p className={style.errorText}>{errors.password2.message}</p>}
          {errorMessagePassword ? <p className={style.errorText}>{errorMessagePassword.message}</p> : ''}
        </div>
        <div>
          <button className={style.button} onClick={handleSubmit(onSubmit)} disabled={disabled}>
            Sign Up
          </button>
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
