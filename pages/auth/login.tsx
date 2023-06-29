// pages/LoginPage.tsx
import { useLoginMutation } from '@/assets/api/auth/authApi'
import React, { useState } from 'react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginMutation, { isLoading, isError }] = useLoginMutation()

  const handleLogin = async () => {
    try {
      const response = await loginMutation({ email, password }).unwrap()
      // Redirect to the authenticated route or perform any other necessary actions
    } catch (error) {
      console.error('Failed to log in:', error)
    }
  }

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Log In</button>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error occurred while logging in.</div>}
    </div>
  )
}

export default LoginPage
