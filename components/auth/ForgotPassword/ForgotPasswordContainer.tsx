import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { usePasswordRecoverMutation } from '@/assets/api/Auth/AuthApi'
import { useRouter } from 'next/router'
import ForgotPassword from './ForgotPassword'
import { IFormInput } from './ForgotPasswordTypes'
import ReCAPTCHA from 'react-google-recaptcha'

const ForgotPasswordContainer: FC<PropsWithChildren<{}>> = ({ children }) => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY!
  const { push } = useRouter()
  const [serverError, setServerError] = useState('')
  const [recaptchaCode, setRecaptchaCode] = useState('')
  const [isSucceed, setIsSucceed] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [PasswordRecoveryMutation, { isLoading }] = usePasswordRecoverMutation()
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onSubmit' })

  const onChange = (value: string) => {
    setRecaptchaCode(value)
    setServerError('')
    clearErrors()
  }
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!recaptchaCode) {
      setError('recaptcha', {
        type: 'manual',
        message: 'captcha is empty',
      })
      return
    }
    const { email } = data
    const recaptcha = recaptchaCode
    try {
      setIsSucceed(true)
      const response = await PasswordRecoveryMutation({ email, recaptcha })
        .unwrap()
        .then((data) => {
          push('/auth/success')
        })
        .catch((error: any) => {
          setIsSucceed(false)
          recaptchaRef.current?.reset()
          switch (error.status) {
            case 400:
              setServerError(error.data.messages[0].message)
              break
            case 'FETCH_ERROR':
              setServerError(error.error)
              break
            default:
              setServerError('A server error has occurred. Please try again')
              break
          }
        })
    } catch (error) {
      setIsSucceed(false)
      setServerError('A server error has occurred. Please try again')
      console.error('Failed recover:', error)
    }
  }
  return (
    <ForgotPassword
      siteKey={siteKey}
      isLoading={isLoading}
      isSucceed={isSucceed}
      errors={errors}
      serverError={serverError}
      recaptchaRef={recaptchaRef}
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  )
}

export default ForgotPasswordContainer
