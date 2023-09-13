import React from 'react'
import { useRouter } from 'next/router'
import { ServerErrorResponse, ServerLoginResponse } from '@/assets/api/auth/authTypes'
import LoginForm from './LoginForm'
import { useState } from 'react'
import { setAccessTokenCookie } from '@/utils/cookies'
import { useLoginMutation } from '@/assets/api/auth/authQueryApi'
import { LoginParamsData } from './type'

const LoginFormContainer: React.FC = () => {
  const [serverError, setServerError] = useState('')
  const [loginMutation, { isLoading }] = useLoginMutation()
  const router = useRouter()

  const onSubmit = async (data: LoginParamsData) => {
    const { email, password } = data

    await loginMutation({ email, password })
      .unwrap()
      .then((data: ServerLoginResponse) => {
        setAccessTokenCookie(data.accessToken)
        router.push('/home')
      })
      .catch((error: ServerErrorResponse) => console.log(error.data.error))
  }

  return (
    <LoginForm onSubmit={onSubmit} setServerError={setServerError} serverError={serverError} isLoading={isLoading}></LoginForm>
  )
}

export default LoginFormContainer
