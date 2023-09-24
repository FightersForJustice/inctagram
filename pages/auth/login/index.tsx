import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import LoginFormContainer from '@/components/auth/Login/LoginFormContainer'
import { GetServerSideProps } from 'next'
import { hideWhenAuth } from '@/utils/getServerSideProps/hideWhenAuth'

export const getServerSideProps: GetServerSideProps = hideWhenAuth

const Login = () => {
  return (
    <PageWrapper>
      <LoginFormContainer />
    </PageWrapper>
  )
}

Login.getLayout = getLayout

export default Login
