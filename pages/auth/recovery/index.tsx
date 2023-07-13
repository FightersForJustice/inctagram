import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import NewPasswordContainer from '@/components/auth/NewPassword/NewPasswordContainer'
import { getLayout } from '@/components/Layout/Layout'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const NewPassword = () => {
  return (
    <PageWrapper>
      <NewPasswordContainer></NewPasswordContainer>
    </PageWrapper>
  )
}

NewPassword.getLayout = getLayout
export default NewPassword
