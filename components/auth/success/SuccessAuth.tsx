import Image from 'next/image'
import img from '../../../public/img/wall-success.png'
import style from './SuccessAuth.module.scss'
import commonStyle from '../../../styles/common.module.scss'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { useRouter } from 'next/router'
import { MainButton } from '@/components/common/Buttons/buttons'
import { authRouts } from '@/components/common/Auth/authRouts'
import { useTranslation } from 'react-i18next'

const SuccessAuth = () => {
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
          <div className={style.textBlock}>
            <h1 className={commonStyle.title}>{translate('Congratulations')}</h1>
            <p className={commonStyle.text}> {translate('Your_email_has_been_confirmed')}</p>
          </div>
          <MainButton title={translate('sign_in')} onClick={handleLogin} disabled={false} style={{ width: '182px' }} />
          <div style={{ position: 'relative', height: '291px' }}>
            <Image
              alt="successful registration"
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
      </div>
    </PageWrapper>
  )
}

export default SuccessAuth
