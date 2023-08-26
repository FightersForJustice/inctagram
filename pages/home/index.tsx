import { axiosAPI } from '@/assets/api/api'
import { UserData } from '@/assets/api/auth/authTypes'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { userRouts } from '@/components/common/User/userRouts'
import { withAuth } from '@/utils/withAuth'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return { props: {} }
})

type HomeType = {
  isAuth: UserData
}

const Home = (props: HomeType) => {
  const { isAuth } = props
  const router = useRouter()

  const handleClick = () => {
    router.push(userRouts.profileSettings)
  }

  return (
    <PageWrapper>
      <button
        onClick={handleClick}
        style={{
          width: '200px',
          height: '50px',
        }}
      >
        Profile Settings
      </button>
    </PageWrapper>
  )
}

Home.getLayout = getSideBarLayout
export default Home
