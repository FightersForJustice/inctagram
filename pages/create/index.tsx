import { UserData } from '@/assets/api/auth/authTypes'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import PostCreation from '@/components/PostCreation/PostCreation'
import { withAuth } from '@/utils/withAuth'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return { props: {} }
})

type HomeType = {
  isAuth: UserData
}

const Create = (props: HomeType) => {
  const { isAuth } = props

  return (
    <PageWrapper>
      <PostCreation />
    </PageWrapper>
  )
}

Create.getLayout = getSideBarLayout
export default Create