'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRegistrationСonfirmMutation } from '@/assets/api/auth/authApi'
import Login from '@/pages/auth/login'
// import { useRouter } from 'next/navigation'

type RegisterationConfirmType = {}

const RegistrationConfirmation: React.FC<RegisterationConfirmType> = () => {
  const router = useRouter()
  const { code } = router.query // Extract the code from URL parameters

  const [registerConfirmMutation, { isSuccess, isError, isLoading }] = useRegistrationСonfirmMutation()

  useEffect(() => {
    const confirmRegistration = async () => {
      try {
        await registerConfirmMutation(code!.toString())

        if (isSuccess) {
          alert('confirmed successfully')
        }
        if (isError) {
          alert('not confirmed')
        }
        // Registration confirmed successfully, show appropriate message or redirect
      } catch (error) {
        alert('not confirmed error block') // не попадаю

        // Registration confirmation failed, handle the error accordingly
      }
    }

    if (code) {
      confirmRegistration()
    }
  }, [code, registerConfirmMutation])

  if (isLoading) {
    return <div>Loading... Когда-то тут будет крутилка</div>
  }
  if (isError) {
    router.push('/auth/failed')
  }

  return (
    <>
      {isSuccess && (
        <div>
          <p>Congratulations! Your email has been confirmed</p>
        </div>
      )}

      {/* {isError && (
        <div>
          <p>Email verification link has expired</p>

        </div>
      )} */}
    </>
  )
}

export default RegistrationConfirmation
