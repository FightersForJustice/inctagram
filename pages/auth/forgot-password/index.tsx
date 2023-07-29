import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import ForgotPasswordContainer from '@/components/auth/ForgotPassword/ForgotPasswordContainer'
import { getLayout } from '@/components/Layout/Layout'
import { GetServerSideProps } from 'next'
import { hideWhenAuth } from '@/utils/getServerSideProps/hideWhenAuth'

export const getServerSideProps: GetServerSideProps = hideWhenAuth

const ForgotPassword = () => {
  return (
    <PageWrapper>
      <ForgotPasswordContainer></ForgotPasswordContainer>
    </PageWrapper>
  )
}

ForgotPassword.getLayout = getLayout
export default ForgotPassword
