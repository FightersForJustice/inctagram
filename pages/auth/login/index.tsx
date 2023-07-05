import { PageWrapper } from 'components/PageWrapper/PageWrapper'

import { getLayout } from '@/components/Layout/Layout'
import LoginFormContainer from '@/components/auth/Login/LoginFormContainer'

// Next запускает эту функцию, и потом рендерит страничку (в зависимости  от пропсов , которые придут). Вызывается единожды на сервере в момент билда, после страничка кешируется
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
