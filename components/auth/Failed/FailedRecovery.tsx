import Image from 'next/image'
import img from '../../../public/img/time-management.png'
import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import style from '@ui/design/settings/AuthMessages.module.scss'
import commonStyle from '@/@ui/design/settings/Common.module.scss'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { authRouts } from '@/app/routes/authRoutes'
import { Button } from '@/@ui/ui-kit/Button/Button'

const FailedRecovery = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const translate = (key: string): string => t(`forgot_password.${key}`)
  const handleResendEmail = () => {
    router.push(authRouts.forgotPassword)
  }

  return (
    <PageWrapper>
      <div className={commonStyle.container}>
        <div className={style.item}>
          <div className={style.infoContainer}>
            <div className={style.textBlock}>
              <h1 className={commonStyle.title}>{translate('Recovery_link_expired')}</h1>
              <p className={commonStyle.text}>{translate('Recovery_link_expired_description')}</p>
            </div>
            <Button text={translate('Resend_recovery_link')} onClick={handleResendEmail} disabled={false} />
          </div>
          <Image
            alt="failed recovery"
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

export default FailedRecovery
