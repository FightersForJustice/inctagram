import React, { PropsWithChildren, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ServerLoginResponse } from '@/assets/api/auth/authTypes'
import LoginForm from './LoginForm'
import style from './LoginForm.module.scss'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { serverAPI } from '@/assets/api/api'
import { setAccessTokenCookie } from '@/utils/cookies'

type LoginParamsData = {
  email: string
  password: string
}

const LoginFormContainer: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`registration_form.${key}`)
  const [serverError, setServerError] = useState('')
  const router = useRouter()

  const onSubmit = async (data: LoginParamsData) => {
    const { email, password } = data
    try {
      const response = await serverAPI.auth.login({ email, password })
      const loginResponse = response as unknown as ServerLoginResponse
      const accessToken = loginResponse.accessToken

      setAccessTokenCookie(accessToken)

      router.push('/home')
    } catch (error) {
      console.error(error)
      setServerError('Login failed. Please try again.')
    }
  }

  const isLoading = false
  return (
    <div className={style.content}>
      <LoginForm onSubmit={onSubmit} setServerError={setServerError} serverError={serverError} isLoading={isLoading}></LoginForm>
    </div>
  )
}

export default LoginFormContainer
