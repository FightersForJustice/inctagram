import Image from 'next/image'
import img from '../../../public/img/wall-success.png'
import style from './SuccessAuth.module.scss'
import commonStyle from '../../../styles/Common.module.scss'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { useRouter } from 'next/router'
import { MainButton } from '@/components/common/Buttons/Buttons'
import { authRouts } from '@/components/common/Auth/AuthRoutes'

const SuccessAuth = () => {
  const router = useRouter()

  const handleLogin = () => {
    return router.push(authRouts.login)
  }

  return (
    <PageWrapper>
      <div className={commonStyle.container}>
        <div className={style.item}>
          <div className={style.textBlock}>
            <h1 className={commonStyle.title}>Congratulations!</h1>
            <p className={commonStyle.text}> Your email has been confirmed</p>
          </div>
          <MainButton title="Sign In" onClick={handleLogin} disabled={false} style={{ width: '182px' }} />
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
