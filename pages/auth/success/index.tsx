import { PageWrapper } from 'components/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import SuccessAuth from '@/components/auth/Success/SuccessAuth'

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Success = () => {
  return (
    <PageWrapper>
      <SuccessAuth></SuccessAuth>
    </PageWrapper>
  )
}

Success.getLayout = getLayout
export default Success
