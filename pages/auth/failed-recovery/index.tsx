import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import FailedRecovery from '@/components/auth/Failed/FailedRecovery'
import { hideWhenAuth } from '@/utils/getServerSideProps/hideWhenAuth'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = hideWhenAuth

const FailedRecoveryPage = () => {
  return (
    <PageWrapper>
      <FailedRecovery></FailedRecovery>
    </PageWrapper>
  )
}

FailedRecoveryPage.getLayout = getLayout
export default FailedRecoveryPage
