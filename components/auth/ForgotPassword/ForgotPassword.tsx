import Link from 'next/link'
import style from './ForgotPassword.module.scss'
import { MainButton } from '@/components/common/Buttons/Buttons'

import ReCAPTCHA from 'react-google-recaptcha'
import { IForgotPasswordProps } from './forgotPasswordTypes'
import ForgotPasswordInput from './ForgotPasswordInput'
import { useTranslation } from 'react-i18next'
import { Loading } from '@/components/common/Loaders/Loading'

const ForgotPassword = (props: IForgotPasswordProps) => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`forgot_password.${key}`)
  const { siteKey, errors, isLoading, isSucceed, serverError, recaptchaRef, handleSubmit, register, onSubmit, onChange } = props

  return (
    <div className={style.mainContainer}>
      <div className={style.form_wrapper}>
        {isLoading && (
          <div className={style.modal}>
            <Loading />
          </div>
        )}

        <form
          className={style.FormRoot}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className={style.header}>{translate('Forgot_Password')}</h1>
          <ForgotPasswordInput register={register} serverError={serverError} errors={errors} />

          <MainButton
            onClick={() => 1 - 1}
            title={translate('Create_New_Password')}
            disabled={isLoading}
            style={{ width: '100%', marginTop: '30px' }}
          />

          <Link className={style.link} href={'login'}>
            {translate('Back_to_Sign_In')}
          </Link>

          <div className={style.recaptcha_wrapper}>
            <ReCAPTCHA sitekey={siteKey} onChange={onChange} className={style.recaptcha} ref={recaptchaRef} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
