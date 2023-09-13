import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import SuccessRecovery from '@/components/auth/Success/SuccessRecovery'
import { GetServerSideProps } from 'next'
import { hideWhenAuth } from '@/utils/getServerSideProps/hideWhenAuth'

export const getServerSideProps: GetServerSideProps = hideWhenAuth

const SuccessRecoveryPage = () => {
  return (
    <PageWrapper>
      <SuccessRecovery></SuccessRecovery>
    </PageWrapper>
  )
}

SuccessRecoveryPage.getLayout = getLayout
export default SuccessRecoveryPage
