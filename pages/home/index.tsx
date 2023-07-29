import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { authRouts } from '@/components/common/Auth/authRoutes'
import { userRouts } from '@/components/common/User/userRouts'
import { checkAuth } from '@/utils/checkAuth'
import { useRouter } from 'next/router'

export const getServerSideProps = async () => {
  if (!checkAuth()) {
    return {
      redirect: {
        destination: authRouts.notAuthorized,
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

const Home = () => {
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

Home.getLayout = getLayout
export default Home
