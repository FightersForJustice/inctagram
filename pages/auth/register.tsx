import React, { useState } from 'react'
import { useRegisterMutation, useRegisterEmailResendMutation } from '@/assets/api/auth/authApi'
import { ServerErrorResponse } from '@/assets/api/auth/authTypes'

const RegisterPage = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [registerMutation, { isLoading, isError, isSuccess, error }] = useRegisterMutation()
  const [registerEmailResendMutation] = useRegisterEmailResendMutation()

  const handleRegister = async () => {
    const registerData = { userName, email, password }

    try {
      const response = await registerMutation(registerData)
      console.log('response', response)
      // if (isError) {
      //   await registerEmailResendMutation(email)
      //   alert('This email already exists. Email was resent!')
      // }
      //@ts-ignore
      if (response.error.status === 400) {
        await registerEmailResendMutation(email)
        alert('This email already exists. Email was resent!')
      }
      //@ts-ignore
      if (response.error.status === 500) {
        alert('Server problem. try again later')
      }

      // if (isError && (error as ServerErrorResponse).statusCode === 400) {
      //   await registerEmailResendMutation(email)
      //   alert('This email already exists. Email was resent!')
      // }
      // if (isError && (error as ServerErrorResponse).statusCode === 500) {
      //   alert('Server problem. try again later')
      // }
    } catch {}
  }

  return (
    <div>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error occurred while registering.</div>}
      {isSuccess && <div>Registration successful!</div>}
    </div>
  )
}

export default RegisterPage
