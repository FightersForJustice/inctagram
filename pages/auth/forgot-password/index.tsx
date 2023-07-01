import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import ForgotPasswordForm from '@/components/auth/ForgotPassword/ForgotPassword'
import { getLayout } from '@/components/Layout/Layout'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const ForgotPassword = () => {
  return (
    <PageWrapper>
      <ForgotPasswordForm></ForgotPasswordForm>
    </PageWrapper>
  )
}

ForgotPassword.getLayout = getLayout
export default ForgotPassword
