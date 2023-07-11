import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import FailedRecovery from '@/components/auth/Failed/FailedRecovery'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const FailedRecoveryPage = () => {
  return (
    <PageWrapper>
      <FailedRecovery></FailedRecovery>
    </PageWrapper>
  )
}

FailedRecoveryPage.getLayout = getLayout
export default FailedRecoveryPage
