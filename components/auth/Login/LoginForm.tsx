import React, { PropsWithChildren, useEffect } from 'react'
import s from './LoginForm.module.css'
import { useForm } from 'react-hook-form'
import GithubSvg from 'public/icons/GithubSvg.svg'
import GoogleSvg from 'public/icons/GoogleSvg.svg'
import Link from 'next/link'
import * as Form from '@radix-ui/react-form'
import { useRouter } from 'next/router'
import { useLoginMutation } from '@/assets/api/auth/authApi'
import EmailFormField from './FormFields/EmailFormField'
import PasswordFormField from './FormFields/PasswordFormField'

type LoginParamsData = {
  email: string
  password: string
}

const LoginForm: React.FC<PropsWithChildren<{}>> = ({ children }) => {

  const [loginMutation] = useLoginMutation()
  const router = useRouter();

  //We are trying to find the token before 
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {

      console.log('Access token found:', token);
      router.push('/mainPage')
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<LoginParamsData>();

  // save token to the localStorage
  const saveToken = (token: string) => {
    localStorage.setItem('accessToken', token);
  };


  // submitting data
  const onSubmit = async (data: LoginParamsData) => {
    const { email, password } = data;

    try {
      const response = await loginMutation({ email, password })
        .unwrap()
        .then((data) => {
          // saveToken(data.accessToken) // TS not void | server error
          alert("Success login")
          router.push('/mainPage')
        })
        .catch((error: any) => {
          alert(error.data.error === "Unauthorized" ? "Wrong email or password" : error.data.error)
          if (error.status == 'FETCH_ERROR') {
            alert('Server Error')
          }
          if (typeof error.data != 'undefined') {
            console.log(error.data.messages[0].message)
          }
        })

    } catch (error) {
      console.error('Failed to log in:', error)
    }
  }


  return (
    <div className={s.mainContainer}>
      <div className={s.form_wrapper}>
        <h2 className={s.loginForm_title}>Sign In</h2>
        {/*icons_group Should be Component */}
        <div className={s.icons_group}>
          <Link href="#">
            <GoogleSvg />
          </Link>
          <Link href="#">
            <GithubSvg />
          </Link>
        </div>

        <Form.Root className={s.FormRoot} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

          <EmailFormField register={register} errors={errors} />
          <PasswordFormField register={register} errors={errors} />

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
