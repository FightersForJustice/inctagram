import style from './index.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRegisterMutation } from './../../assets/api/auth/authApi'
import { useState } from 'react'
import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'

type FormValues = {
  userName: string
  email: string
  password: string
  password2: string
}
type ErrorMessagerType = {
  field: string
  message: string
}

const Registration = () => {
  const [arr, setArr] = useState<ErrorMessagerType[]>([])
  const [pas, setPas] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>()
  const [registers, { isLoading }] = useRegisterMutation()
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (data.password === data.password2) {
      try {
        registers(data)
          .unwrap()
          .then(() => alert('Вы зарегестрированы'))
          .catch((error: any) => {
            console.log(error.status)
            if (error.status == 'FETCH_ERROR') {
              alert('Ошибка на сервере')
            }
            if (typeof error.data != 'undefined') {
              setArr(error.data.messages)
            }
          })
      } catch (error) {
        console.error('Ошибка регистрации:', error)
      }
    } else {
      setPas('* Passwords must match')
    }
  }

  const errorMessageEmail = arr.find((obj) => obj.field === 'email')
  const errorMessageName = arr.find((obj) => obj.field === 'name')
  const errorMessagePassword = arr.find((obj) => obj.field === 'password')
  return (
    <PageWrapper>
      <div className={style.content}>
        <div className={style.registration}>
          {isLoading && (
            <div className={style.modal}>
              <img className={style.img} src="/img/Loading.svg" alt="github.com" />
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
            <div>
              <label>Username</label>
              <input
                onClick={() => setArr([])}
                className={errors.userName || errorMessageName ? style.error : ''}
                {...register('userName', {
                  required: {
                    value: true,
                    message: '* Required field to fill in',
                  },
                  maxLength: {
                    value: 30,
                    message: '* Username must be shorter than or equal to 30 characters',
                  },
                  minLength: {
                    value: 6,
                    message: '* Username must be longer than or equal to 6 characters',
                  },
                })}
                placeholder="Epam"
              />
              {errors.userName && <p className={style.errorText}>{errors.userName.message}</p>}
              {errorMessageName ? <p className={style.errorText}>{errorMessageName.message}</p> : ''}
            </div>
            <div>
              <label>Email</label>
              <input
                onClick={() => setArr([])}
                className={errors.email || errorMessageEmail ? style.error : ''}
                {...register('email', {
                  required: {
                    value: true,
                    message: '* Required field to fill in',
                  },
                  maxLength: {
                    value: 30,
                    message: '* Username must be shorter than or equal to 30 characters',
                  },
                  minLength: {
                    value: 6,
                    message: '* Username must be longer than or equal to 6 characters',
                  },
                })}
                placeholder="Epam@epam.com"
              />
              {errors.email && <p className={style.errorText}>{errors.email.message}</p>}
              {errorMessageEmail ? <p className={style.errorText}>{errorMessageEmail.message}</p> : ''}
            </div>
            <div>
              <label>Password</label>
              <input
                onClick={() => {
                  setArr([])
                  setPas('')
                }}
                className={errors.password || errorMessagePassword ? style.error : ''}
                type="password"
                {...register('password', {
                  required: {
                    value: true,
                    message: '* Required field to fill in',
                  },
                  maxLength: {
                    value: 20,
                    message: '* Password must be shorter than or equal to 20 characters',
                  },
                  minLength: {
                    value: 6,
                    message: '* Password must be longer than or equal to 6 characters',
                  },
                })}
                placeholder="******************"
              />
              {errors.password && <p className={style.errorText}>{errors.password.message}</p>}
              {errorMessagePassword ? <p className={style.errorText}>{errorMessagePassword.message}</p> : ''}
            </div>
            <div>
              <label>Password confirmation</label>
              <input
                onClick={() => {
                  setArr([])
                  setPas('')
                }}
                className={errorMessagePassword ? style.error : ''}
                type="password"
                {...register('password2', {
                  required: {
                    value: true,
                    message: '* Required field to fill in',
                  },
                })}
                placeholder="******************"
              />
              {pas != '' ? <p className={style.errorText}>{pas}</p> : ''}
              {errorMessagePassword ? <p className={style.errorText}>{errorMessagePassword.message}</p> : ''}
            </div>
            <div>
              <input className={style.button} type="submit" value="Sign Up" />
            </div>
          </form>
          <p>Do you have an account?</p>
          <a href="/login" className={style.SignIn}>
            Sign In
          </a>
        </div>
      </div>
    </PageWrapper>
  )
}
Registration.getLayout = getLayout
export default Registration
