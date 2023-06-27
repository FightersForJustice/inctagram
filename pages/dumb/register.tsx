// pages/RegisterPage.tsx
import { useRegisterMutation } from '@/assets/api/auth/authApi'
import React, { useState } from 'react'

const RegisterPage = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [registerMutation, { isLoading, isError }] = useRegisterMutation()

  const handleRegister = async () => {
    try {
      const response = await registerMutation({
        userName,
        email,
        password,
      }).unwrap()
      // Handle successful registration, e.g., show success message, redirect to login page
    } catch (error) {
      console.error('Failed to register:', error)
    }
  }

  return (
    <div>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error occurred while registering.</div>}
    </div>
  )
}

export default RegisterPage
