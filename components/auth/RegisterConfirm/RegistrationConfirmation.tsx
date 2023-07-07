import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRegistrationСonfirmMutation } from '@/assets/api/Auth/AuthApi'
import { Loading } from '@/components/common/Loaders/Loading'
import { authRouts } from '@/components/common/Auth/AuthRoutes'

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
      router.push(authRouts.success)
    } else if (isError) {
      router.push(authRouts.failed)
    }
  }, [isSuccess, isError, router])

  return <>{isLoading && <Loading />}</>
}

export default RegistrationConfirmation
