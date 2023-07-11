import Image from 'next/image'
import img from '../../../public/img/time-management.png'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import style from './FailedAuth.module.scss'
import commonStyle from '../../../styles/Common.module.scss'
import { MainButton } from '@/components/common/Buttons/Buttons'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { authRouts } from '@/components/common/Auth/authRoutes'

const FailedRecovery = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const handleResendEmail = () => {
    router.push(authRouts.forgotPassword)
  }

  return (
    <PageWrapper>
      <div className={commonStyle.container}>
        <div className={style.item}>
          <div className={style.textBlock}>
            <h1 className={commonStyle.title}>{'Password recovery link expired'}</h1>
            <p className={commonStyle.text}>
              {'Looks like the recovery link has expired. Not to worry, we can send the link again'}
            </p>
          </div>
          <div>
            <MainButton title={'Resend recovery link'} onClick={handleResendEmail} disabled={false} style={{ width: '229px' }} />
          </div>
          <div style={{ position: 'relative', height: '291px' }}>
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
      </div>
    </PageWrapper>
  )
}

export default FailedRecovery
