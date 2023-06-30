'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRegistrationСonfirmMutation } from '@/assets/api/auth/authApi'

type RegistrationConfirmType = {}

const RegistrationConfirmation: React.FC<RegistrationConfirmType> = () => {
  const router = useRouter()
  const { code } = router.query // Extract the code from URL parameters

  const [registerConfirmMutation, { isSuccess, isError, isLoading }] = useRegistrationСonfirmMutation()

  useEffect(() => {
    const confirmRegistration = async () => {
      try {
        await registerConfirmMutation(code!.toString())
      } catch (error) {}
    }

    if (code) {
      confirmRegistration()
    }
  }, [code, registerConfirmMutation])

  useEffect(() => {
    if (isSuccess) {
      router.push('/auth/success')
    } else if (isError) {
      router.push('/auth/failed')
    }
  }, [isSuccess, isError, router])

  return <>{isLoading && <div>Loading... Когда-то тут будет крутилка</div>}</>
}

export default RegistrationConfirmation
