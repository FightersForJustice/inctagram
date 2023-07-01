import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import FailedAuth from '@/components/auth/failed/FailedAuth'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Failed = () => {
  return (
    <PageWrapper>
      <FailedAuth></FailedAuth>
    </PageWrapper>
  )
}

Failed.getLayout = getLayout
export default Failed
