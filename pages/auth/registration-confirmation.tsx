import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useRegisterConfirmMutation } from '@/assets/api/auth/authApi'

const Confirm = () => {
  const router = useRouter()
  const { code } = router.query // Extract the code from URL parameters
  console.log(code)

  const [registerConfirmMutation, { isSuccess, isError }] = useRegisterConfirmMutation()

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
        alert('not confirmed error block')

        // Registration confirmation failed, handle the error accordingly
      }
    }

    if (code) {
      confirmRegistration()
    }
  }, [code, registerConfirmMutation])

  return (
    <div>
      <p>Registration Confirmation Page</p>
    </div>
  )
}

export default Confirm
