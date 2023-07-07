import React, { PropsWithChildren, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLoginMutation } from '@/assets/api/auth/authApi'
import { ServerLoginResponse } from '@/assets/api/auth/authTypes'
import LoginForm from './LoginForm'
import style from './LoginForm.module.scss'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type LoginParamsData = {
  email: string
  password: string
}

const LoginFormContainer: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`registration_form.${key}`)
  const [serverError, setServerError] = useState('')
  const [loginMutation, { isLoading }] = useLoginMutation()
  const router = useRouter()

  //We are trying to find the token before
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      console.log('Access token found:', token)
      router.push('/mainPage')
    }
  }, [])

  // save token to the localStorage
  const saveToken = (token: string) => {
    localStorage.setItem('accessToken', token)
  }

  // submitting data
  const onSubmit = async (data: LoginParamsData) => {
    const { email, password } = data

    try {
      const response = await loginMutation({ email, password })
        .unwrap()
        .then((data) => {
          const loginResponse = data as ServerLoginResponse
          saveToken(loginResponse.accessToken)
          alert('Success login')
          router.push('/main')
        })
        .catch((error: any) => {
          setServerError(error.data.error === 'Unauthorized' ? translate('incorrect_password_or_email') : error.data.error)
          if (error.status == 'FETCH_ERROR') {
            alert('Server Error')
          }
          if (typeof error.data != 'undefined') {
            setServerError('The password or email you entered is incorrect. Please try again')
          }
        })
    } catch (error) {
      console.error('Failed to log in:', error)
    }
  }

  return (
    <div className={style.content}>
      <LoginForm onSubmit={onSubmit} setServerError={setServerError} serverError={serverError} isLoading={isLoading}></LoginForm>
    </div>
  )
}

export default LoginFormContainer
