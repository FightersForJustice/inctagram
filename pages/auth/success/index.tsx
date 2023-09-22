import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import SuccessAuth from '@/components/auth/Success/SuccessAuth'
import { GetServerSideProps } from 'next'
import { hideWhenAuth } from '@/utils/getServerSideProps/hideWhenAuth'

export const getServerSideProps: GetServerSideProps = hideWhenAuth

const Success = () => {
  return (
    <PageWrapper>
      <SuccessAuth></SuccessAuth>
    </PageWrapper>
  )
}

Success.getLayout = getLayout
export default Success
