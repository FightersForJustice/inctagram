import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { Legal } from '@/components/legal/Legal'

const TermsOfService = () => (
  <PageWrapper>
    <Legal title={'Terms Of Service'} />
  </PageWrapper>
)

TermsOfService.getLayout = getLayout

export default TermsOfService
