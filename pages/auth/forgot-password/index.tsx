import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import ForgotPasswordContainer from '@/components/auth/ForgotPassword/ForgotPasswordContainer'
import { getLayout } from '@/components/Layout/Layout'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const ForgotPassword = () => {
  return (
    <PageWrapper>
      <ForgotPasswordContainer></ForgotPasswordContainer>
    </PageWrapper>
  )
}

ForgotPassword.getLayout = getLayout
export default ForgotPassword
