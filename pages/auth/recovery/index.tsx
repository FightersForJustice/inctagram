import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import NewPasswordContainer from '@/components/auth/NewPassword/NewPasswordContainer'
import { getLayout } from '@/components/Layout/Layout'
import { GetServerSideProps } from 'next'
import { hideWhenAuth } from '@/utils/getServerSideProps/hideWhenAuth'

export const getServerSideProps: GetServerSideProps = hideWhenAuth

const NewPassword = () => {
  return (
    <PageWrapper>
      <NewPasswordContainer></NewPasswordContainer>
    </PageWrapper>
  )
}

NewPassword.getLayout = getLayout
export default NewPassword
