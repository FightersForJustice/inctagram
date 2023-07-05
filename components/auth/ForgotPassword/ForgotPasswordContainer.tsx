import { FC, PropsWithChildren, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { usePasswordRecoverMutation } from '@/assets/api/auth/authApi'
import { useRouter } from 'next/router'
import ForgotPassword from './ForgotPassword'
import { IFormInput } from './ForgotPasswordTypes'
import { useTranslation } from 'react-i18next'

const ForgotPasswordContainer: FC<PropsWithChildren<{}>> = ({ children }) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`forgot_password.${key}`)
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY!
  const { push } = useRouter()
  const [serverError, setServerError] = useState('')
  const [recaptchaCode, setRecaptchaCode] = useState('')
  const [PasswordRecoveryMutation, { isLoading }] = usePasswordRecoverMutation()
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'onSubmit' })

  const onChange = (value: any) => {
    setRecaptchaCode(value)
    clearErrors()
  }
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!recaptchaCode) {
      setError('recaptcha', {
        type: 'manual',
        message: translate('captcha_is_empty'),
      })
      return
    }
    const { email } = data
    const recaptcha = recaptchaCode
    try {
      const response = await PasswordRecoveryMutation({ email, recaptcha })
        .unwrap()
        .then((data) => {
          push('/auth/success')
        })
        .catch((error: any) => {
          setServerError(error.data.error === 'Bad Request' ? 'Incorrect email or reCaptcha' : error.data.error)
          if (error.status == 'FETCH_ERROR') {
            alert('Server Error')
          }
          if (typeof error.data != 'undefined') {
            console.log(error.data.messages[0].message)
          }
        })
    } catch (error) {
      console.error('Failed recover:', error)
    }
  }
  return (
    <ForgotPassword
      siteKey={siteKey}
      isLoading={isLoading}
      errors={errors}
      serverError={serverError}
      handleSubmit={handleSubmit}
      register={register}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  )
}

export default ForgotPasswordContainer
