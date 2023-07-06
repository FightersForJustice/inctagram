import style from './RegistrationForm.module.scss'
import { useForm} from 'react-hook-form'
import { getLayout } from '@/components/Layout/Layout'
import { ValidateUsername, ValidateEmail, ValidatePassword } from '../Login/validate'
import { Loading } from '@/components/common/loaders/Loading'
import { MainButton } from '@/components/common/Buttons/buttons'
import Link from 'next/link'
import { authRouts } from '@/components/common/Auth/authRouts'
import { useTranslation } from 'react-i18next'
import { MainInput } from './imputPassword'
import { FormValuesType, RegistrationPropsType } from './type'

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
  const { t } = useTranslation()
  const value = (key: string): string => t(`registration_form.${key}`)
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


const RegistrationForm = (props:RegistrationPropsType) => {
  const { onSubmit, isLoading, errorMessageEmail, errorMessageName, errorMessagePassword, ArrayErrorMessager} = props
  const {register, handleSubmit, formState: {errors} } = useForm<FormValuesType>()
  const disabled = Object.keys(errors).length === 0 ? false: true
    return (
    <div className={style.registration}>
      {isLoading &&
        <div className={style.modal}>
          <Loading />
        </div>
      }
      <h1>{value('sign_up')}</h1>
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
          <label>{value('username')}</label>
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
          <label>{value('password')}</label>
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
          <label>{value('password_confirmation')}</label>
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
          <button className={style.button} onClick={handleSubmit(onSubmit)}  disabled={disabled} >{value('sign_up')}</button>
        </div>
      </form>
      <p>{value('do_you_have_an_account?')}</p>
      <a href="/auth/login" className={style.SignIn}>
      {value('sign_in')}
      </a>
    </div>
    )
}
RegistrationForm.getLayout = getLayout
export default RegistrationForm
