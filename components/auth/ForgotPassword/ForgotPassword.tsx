import Link from 'next/link'
import style from './ForgotPassword.module.scss'
import { MainButton } from '@/components/common/Buttons/buttons'
import { Loading } from '@/components/common/loaders/Loading'
import ReCAPTCHA from 'react-google-recaptcha'
import { IForgotPasswordProps } from './ForgotPasswordTypes'
import ForgotPasswordInput from './ForgotPasswordInput'

const ForgotPassword = (props: IForgotPasswordProps) => {
  const { siteKey, isLoading, errors, serverError, recaptchaRef,
    handleSubmit, register, onSubmit, onChange } = props

  return (
    <div className={style.mainContainer}>
      <div className={style.form_wrapper}>
        {isLoading && (
          <div className={style.modal}>
            <Loading />
          </div>
        )}
        <h1 className={style.header}>Forgot Password</h1>
        <form className={style.FormRoot} onSubmit={handleSubmit(onSubmit)}>
          <ForgotPasswordInput
            register={register}
            serverError={serverError}
            errors={errors}
          />

          <MainButton
            onClick={() => 1 - 1}
            title="Create New Password"
            disabled={false}
            style={{ width: '100%', marginTop: '30px' }} />

          <Link className={style.link} href={'login'}>
            Back to Sign In
          </Link>

          <div className={style.recaptcha_wrapper}>
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={onChange}
              className={style.recaptcha}
              ref={recaptchaRef} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
