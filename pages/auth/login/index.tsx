import { PageWrapper } from 'components/PageWrapper/PageWrapper'

import { getLayout } from '@/components/Layout/Layout'
import LoginFormContainer from '@/components/auth/Login/LoginFormContainer'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Login = () => {
  return (
    <PageWrapper>
      <LoginFormContainer />
    </PageWrapper>
  )
}

Login.getLayout = getLayout
export default Login
