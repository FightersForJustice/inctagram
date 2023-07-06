import Link from 'next/link'
import style from './ForgotPassword.module.scss'
import { MainButton } from '@/components/common/Buttons/buttons'
import { Loading } from '@/components/common/loaders/Loading'
import ReCAPTCHA from 'react-google-recaptcha'
import { IForgotPasswordProps } from './ForgotPasswordTypes'
import { useTranslation } from 'next-i18next'

const ForgotPassword = (props: IForgotPasswordProps) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`forgot_password.${key}`)
  const { siteKey, isLoading, errors, serverError, handleSubmit, register, onSubmit, onChange } = props
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
        <h1 className={style.header}>{translate('Forgot_Password')}</h1>
        <form className={style.FormRoot} onSubmit={handleSubmit(onSubmit)}>
          <ForgotPasswordInput
            register={register}
            serverError={serverError}
            errors={errors}
          />

          <MainButton
            onClick={() => 1 - 1}
            title={translate('Create_New_Password')}
            disabled={false}
            style={{ width: '100%', marginTop: '30px' }} />

          <Link className={style.link} href={'login'}>
            {translate('Back_to_Sign_In')}
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
