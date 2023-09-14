import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { getLayout } from '@/components/Layout/Layout'
import FailedAuth from '@/components/auth/Failed/FailedAuth'
import { GetServerSideProps } from 'next'
import { hideWhenAuth } from '@/utils/getServerSideProps/hideWhenAuth'

export const getServerSideProps: GetServerSideProps = hideWhenAuth

const Failed = () => {
  return (
    <PageWrapper>
      <FailedAuth></FailedAuth>
    </PageWrapper>
  )
}

Failed.getLayout = getLayout
export default Failed
