import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import SuccessRecovery from '@/components/auth/Success/SuccessRecovery'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const SuccessRecoveryPage = () => {
  return (
    <PageWrapper>
      <SuccessRecovery></SuccessRecovery>
    </PageWrapper>
  )
}

SuccessRecoveryPage.getLayout = getLayout
export default SuccessRecoveryPage
