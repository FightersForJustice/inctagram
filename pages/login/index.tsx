import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import LoginForm from '@/components/Login/LoginForm'
import { getLayout } from '@/components/Layout/Layout'

// Next запускает эту функцию, и потом рендерит страничку (в зависимости  от пропсов , которые придут). Вызывается единожды на сервере в момент билда, после страничка кешируется
export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Login = () => {
  return (
    <PageWrapper>
      <LoginForm></LoginForm>
    </PageWrapper>
  )
}

Login.getLayout = getLayout
export default Login
