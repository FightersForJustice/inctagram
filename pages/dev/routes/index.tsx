import { ButtonLink } from '@/@ui/ui-kit/ButtonLink/ButtonLink'
import { authRouts } from '@/app/routes/authRoutes'
import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import style from './index.module.scss'

export async function getStaticProps() {
  return {
    props: {},
  }
}

// me: '/auth/me',
// login: '/auth/login',
// registration: '/auth/registration',
// registrationСonfirm: '/auth/registration-confirmation',
// registrationEmailResend: '/auth/registration-email-resending',
// forgotPassword: '/auth/forgot-password',
// passwordRecover: '/auth/password-recovery',
// newPasswordCreate: '/auth/new-password',
// recoveryCodeCheck: '/auth/check-recovery-code',
// success: '/auth/success',
// failed: '/auth/failed',
// failedPasswordRecovery: '/auth/failed-recovery',
// successPasswordRecovery: '/auth/success-recovery',
// logout: '/auth/logout',

const Routes = () => {
  return (
    <PageWrapper>
      <h1 className={style.text}>Auth</h1>
      <div className={style.container}>
        <ButtonLink url="/auth/login" text="login" />
        <ButtonLink url="/auth/registration" text="registration" />
        <ButtonLink url="/auth/failed" text="failed" />
        <ButtonLink url="/auth/failed-recovery" text="failed-recovery" />
        <ButtonLink url="/auth/forgot-password" text="forgot-password" />
        <ButtonLink url="/auth/recovery" text="recovery" />
        <ButtonLink url="/auth/success" text="success" />
        <ButtonLink url="/auth/success-recovery" text="success-recovery" />
        <ButtonLink url="/auth/registration-confirmation" text="registration-confirmation (With logic only)" />
      </div>

      <h1 className={style.text}>Dev</h1>
      <div className={style.container}>
        <ButtonLink url="/dev/routes" text="routes" />
        <ButtonLink url="/dev/ui-kit" text="ui-kit" />
      </div>

      <h1 className={style.text}>Home</h1>
      <div className={style.container}>
        <ButtonLink url="/home" text="home" />
      </div>

      <h1 className={style.text}>Legal</h1>
      <div className={style.container}>
        <ButtonLink url="/legal/privacy-policy" text="privacy-policy" />
        <ButtonLink url="/legal/terms" text="terms" />
      </div>

      <h1 className={style.text}>Profile</h1>
      <div className={style.container}>
        <ButtonLink url="/profile/profile-settings" text="profile-settings" />
      </div>
    </PageWrapper>
  )
}

Routes.getLayout = getLayout

export default Routes
