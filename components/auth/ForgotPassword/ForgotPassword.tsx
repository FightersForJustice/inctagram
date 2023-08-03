import Link from 'next/link'
import style from './ForgotPassword.module.scss'
import ReCAPTCHA from 'react-google-recaptcha'
import { IForgotPasswordProps } from './forgotPasswordTypes'
import ForgotPasswordInput from './ForgotPasswordInput'
import { useTranslation } from 'react-i18next'
import { Loading } from '@/components/common/Loaders/Loading'
import authStyle from '@/@ui/design/settings/commonAuth.module.scss'
import { Button } from '@/@ui/ui-kit/Button/Button'

const ForgotPassword = (props: IForgotPasswordProps) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`forgot_password.${key}`)
  const { siteKey, errors, isLoading, isSucceed, serverError, recaptchaRef, handleSubmit, register, onSubmit, onChange } = props

  return (
    <div className={authStyle.authContainer}>
      {isLoading && (
        <div className={authStyle.loading}>
          <Loading />
        </div>
      )}

      <form className={authStyle.authForm} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={authStyle.header}>{translate('Forgot_Password')}</h1>
        <ForgotPasswordInput register={register} serverError={serverError} errors={errors} />
        <div className={style.button_wrapper}>
          <Button
            onClick={handleSubmit(onSubmit)}
            text={translate('Send_link')}
            disabled={isLoading}
            color='Primary'
          />
        </div>

        <Link className={style.link} href={'login'}>
          {translate('Back_to_Sign_In')}
        </Link>

        <div className={style.recaptcha_wrapper}>
          <ReCAPTCHA sitekey={siteKey} onChange={onChange} className={style.recaptcha} ref={recaptchaRef} theme='dark' />
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword
