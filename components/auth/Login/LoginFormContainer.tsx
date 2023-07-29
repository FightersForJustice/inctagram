import React, { PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { ServerLoginResponse } from '@/assets/api/auth/authTypes'
import LoginForm from './LoginForm'
import style from './LoginForm.module.scss'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { setAccessTokenCookie } from '@/utils/cookies'
import { useLoginMutation } from '@/assets/api/auth/authQueryApi'

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

  const onSubmit = async (data: LoginParamsData) => {
    const { email, password } = data

    const response = await loginMutation({ email, password })
      .unwrap()
      .then((data) => {
        const loginResponse = data as ServerLoginResponse
        setAccessTokenCookie(loginResponse.accessToken)
        router.push('/home')
      })
  }

  return (
    <div className={style.content}>
      <LoginForm onSubmit={onSubmit} setServerError={setServerError} serverError={serverError} isLoading={isLoading}></LoginForm>
    </div>
  )
}

export default LoginFormContainer
