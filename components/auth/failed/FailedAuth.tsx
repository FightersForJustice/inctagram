import Image from 'next/image'
import img from '../../../public/img/time-management.png'

import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import style from './FailedAuth.module.scss'
import commonStyle from '../../../styles/common.module.scss'
import { MainButton } from '@/components/common/Buttons/buttons'
import { useRegistrationEmailResendMutation } from '@/assets/api/auth/authApi'

const FailedAuth = () => {
  // const [emailSent, setEmailSent] = useState(false)

  const [resendEmail, { isLoading, isSuccess, isError }] = useRegistrationEmailResendMutation()

  const handleResendEmail = () => {
    resendEmail('userEmail')
  }

  return (
    <PageWrapper>
      <div className={commonStyle.container}>
        <div className={style.item}>
          <div className={style.textBlock}>
            <h1 className={commonStyle.title}>Email verification link expired!</h1>
            <p className={commonStyle.text}>
              Looks like the verification link has expired. Not to worry, we can send the link again
            </p>
          </div>
          <MainButton title="Resend verification link" onClick={handleResendEmail} disabled={isLoading} />
          <div style={{ position: 'relative', height: '291px' }}>
            <Image
              alt="failed registration"
              src={img}
              placeholder="blur"
              quality={100}
              fill
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

export default FailedAuth
