import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import NewPasswordForm from '@/components/auth/NewPassword/NewPassword'
import { getLayout } from '@/components/Layout/Layout'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const NewPassword = () => {
  return (
    <PageWrapper>
      <NewPasswordForm></NewPasswordForm>
    </PageWrapper>
  )
}

NewPassword.getLayout = getLayout
export default NewPassword
