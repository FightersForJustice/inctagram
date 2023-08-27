import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { Legal } from '@/components/legal/Legal'

const PrivacyPolicy = () => (
  <PageWrapper>
    <Legal title={'Privacy Policy'} />
  </PageWrapper>
)

PrivacyPolicy.getLayout = getLayout

export default PrivacyPolicy
