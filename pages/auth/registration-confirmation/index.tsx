import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import RegistrationConfirmation from '@/components/auth/RegisterConfirm/RegistrationConfirmation'
import { GetServerSideProps } from 'next'
import { hideWhenAuth } from '@/utils/getServerSideProps/hideWhenAuth'

export const getServerSideProps: GetServerSideProps = hideWhenAuth

const registrationConfirmation = () => {
  return (
    <PageWrapper>
      <RegistrationConfirmation></RegistrationConfirmation>
    </PageWrapper>
  )
}

registrationConfirmation.getLayout = getLayout
export default registrationConfirmation
