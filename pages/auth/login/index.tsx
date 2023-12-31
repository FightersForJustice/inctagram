import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import LoginFormContainer from '@/components/auth/Login/LoginFormContainer'
import { GetServerSideProps, NextApiRequest } from 'next'
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
