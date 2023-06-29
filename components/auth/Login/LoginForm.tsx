import React, { PropsWithChildren } from 'react'
import s from './LoginForm.module.css'
import { useForm } from 'react-hook-form'
import GithubSvg from 'public/icons/GithubSvg.svg'
import GoogleSvg from 'public/icons/GoogleSvg.svg'
import Link from 'next/link'
import * as Form from '@radix-ui/react-form'
import { useRouter } from 'next/router'
import { useLoginMutation } from '@/assets/api/auth/authApi'

type LoginParamsData = {
  email: string
  password: string
}

const LoginForm: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<any>()
  const router = useRouter()

  const [loginMutation, { isLoading, isError }] = useLoginMutation()

  const onSubmit = async (data: LoginParamsData) => {
    const { email, password } = data
    try {
      const response = await loginMutation({ email, password }).unwrap()
      router.push('/successLogin')
    } catch (error) {
      console.error('Failed to log in:', error)
    }
  }

  const handleEmailClick = () => {
    setValue('email', '')
  }

  const handlePasswordClick = () => {
    setValue('password', '')
  }

  return (
    <div className={s.mainContainer}>
      <div className={s.form_wrapper}>
        <h2 className={s.loginForm_title}>Sign In</h2>
        <div className={s.icons_group}>
          <Link href="#">
            <GoogleSvg />
          </Link>
          <Link href="#">
            <GithubSvg />
          </Link>
        </div>

        <Form.Root className={s.FormRoot} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Form.Field className={s.FormField} name="email">
            <div className={s.form_field_container}>
              <Form.Message className={s.FormMessage} match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message className={s.FormMessage} match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className={s.Input}
                defaultValue="Email"
                type="email"
                id="email"
                {...register('email', { maxLength: 80 })}
                onClick={handleEmailClick}
              />
            </Form.Control>
          </Form.Field>

          <Form.Field className={s.FormField} name="password">
            <div className={s.form_field_container}>
              <Form.Message className={s.FormMessage} match="valueMissing">
                Please enter your password
              </Form.Message>
              <Form.Message className={s.FormMessage} match="valueMissing">
                Password must be at least 8 characters long
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className={s.Input}
                defaultValue="Email"
                type="password"
                id="password"
                {...register('password', { minLength: 8 })}
                onClick={handlePasswordClick}
              />
            </Form.Control>
          </Form.Field>
          <Link href="/PasswordRecovery" className={s.link}>
            Forgot Password
          </Link>
          <input type="submit" className={s.Button} value="Sign In" />
          <Link href="/auth/registration" className={s.link}>
            Sign Up
          </Link>
        </Form.Root>
      </div>
    </div>
  )
}

export default LoginForm
