import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import RegistrationFormContainer from '@/components/auth/Registration/RegistrationFormContainer'
import { GetServerSideProps } from 'next'
import { hideWhenAuth } from '@/utils/getServerSideProps/hideWhenAuth'

export const getServerSideProps: GetServerSideProps = hideWhenAuth

const Registration = () => {
  return (
    <PageWrapper>
        <RegistrationFormContainer />
    </PageWrapper>
  )
}
Registration.getLayout = getLayout
export default Registration
