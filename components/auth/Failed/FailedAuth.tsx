import Image from 'next/image'
import img from '../../../public/img/time-management.png'
import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import style from '@ui/design/settings/AuthMessages.module.scss'
import commonStyle from '@/@ui/design/settings/Common.module.scss'
import { useRegistrationEmailResendMutation } from '@/assets/api/auth/authQueryApi'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/@ui/ui-kit/Button/Button'
import { BUTTON_VARIATIONS } from '@/@ui/ui-kit/Button/constants'

const FailedAuth = () => {
  const { t } = useTranslation()
  const [userEmail, setUserEmail] = useState<string>('')
  const [resendEmail, { isLoading, isSuccess, isError }] = useRegistrationEmailResendMutation()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedEmail = localStorage.getItem('userEmail')
      setUserEmail(storedEmail ?? '')
    }
  }, [])

  const handleResendEmail = () => {
    resendEmail(userEmail)
  }

  return (
    <PageWrapper>
      <div className={commonStyle.container}>
        <div className={style.item}>
          <div className={style.infoContainer}>
            <div className={style.textBlock}>
              <h1 className={commonStyle.title}>{t('Email_verification_link_expired')}</h1>
              <p className={commonStyle.text}>{t('expired_link')}</p>
            </div>
            <Button text={t('Resend_verification_link')} onClick={handleResendEmail} disabled={isLoading} variation={BUTTON_VARIATIONS.AUTO_HEIGHT}/>
          </div>
          <Image
            alt="failed registration"
            src={img}
            placeholder="blur"
            quality={100}
            sizes="(max-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover',
              position: 'static',
            }}
          />
        </div>
      </div>
    </PageWrapper>
  )
}

export default FailedAuth
