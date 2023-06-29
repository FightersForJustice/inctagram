import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import RegistrationConfirmation from '@/components/auth/RegisterConfirm/RegistrationConfirmation'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const registrationConfirmation = () => {
  return (
    <PageWrapper>
      <RegistrationConfirmation></RegistrationConfirmation>
    </PageWrapper>
  )
}

registrationConfirmation.getLayout = getLayout
export default registrationConfirmation
