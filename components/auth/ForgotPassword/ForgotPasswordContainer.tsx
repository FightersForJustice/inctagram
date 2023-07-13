import { FC, PropsWithChildren, useRef, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { usePasswordRecoverMutation } from '@/assets/api/auth/authApi'
import ForgotPassword from './ForgotPassword'
import { IFormInput } from './forgotPasswordTypes'
import ReCAPTCHA from 'react-google-recaptcha'
import { PrintModalType } from '../Registration/type'
import { Modal } from '@/components/common/Modal/Modal'

const ForgotPasswordContainer: FC<PropsWithChildren<{}>> = ({ children }) => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY!
  const [serverError, setServerError] = useState('')
  const [recaptchaCode, setRecaptchaCode] = useState('')
  const [isSucceed, setIsSucceed] = useState(false)
  const ModalNull = () => {
    setPrintModal({ title: 'null', content: 'null' })
  }

  const [printModal, setPrintModal] = useState<PrintModalType>({ title: 'null', content: 'null' })

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
          setPrintModal({ title: 'Email sent', content: 'We have sent a link to confirm your email to ' + email })
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
    }
  }
  return (
    <>
      {printModal.title != 'null' ? <Modal title={printModal.title} content={printModal.content} onClick={ModalNull} /> : ''}
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
    </>
  )
}

export default ForgotPasswordContainer
