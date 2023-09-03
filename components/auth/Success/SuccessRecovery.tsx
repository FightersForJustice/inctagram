import Image from 'next/image'
import img from '../../../public/img/wall-success.png'
import style from '@ui/design/settings/AuthMessages.module.scss'
import commonStyle from '@/@ui/design/settings/Common.module.scss'
import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { useRouter } from 'next/router'
import { authRouts } from '@/components/common/Auth/authRoutes'
import { useTranslation } from 'react-i18next'
import { Button } from '@/@ui/ui-kit/Button/Button'

const SuccessRecovery = () => {
  const { t } = useTranslation()
  const translate = (key: string): string => t(`success.${key}`)
  const router = useRouter()

  const handleLogin = () => {
    return router.push(authRouts.login)
  }

  return (
    <PageWrapper>
      <div className={commonStyle.container}>
        <div className={style.item}>
          <div className={style.infoContainer}>
            <div className={style.textBlock}>
              <h1 className={commonStyle.title}>{translate('Congratulations')}</h1>
              <p className={commonStyle.text}> {t('forgot_password.Password_has_been_changed')}</p>
            </div>
            <Button text={translate('sign_in')} onClick={handleLogin} disabled={false} />
          </div>
          <Image
            alt="successful recovery"
            src={img}
            placeholder="blur"
            quality={100}
            sizes="(max-width: 808px) 50vw, 100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </PageWrapper>
  )
}

export default SuccessRecovery
