import { serverAPI } from '@/assets/api/api'
import { UserData } from '@/assets/api/auth/authTypes'
import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { authRouts } from '@/components/common/Auth/authRoutes'
import { userRouts } from '@/components/common/User/userRouts'
import { GetServerSideProps, NextApiRequest } from 'next'
import { useRouter } from 'next/router'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const isAuth = await serverAPI.auth.meServer(req as NextApiRequest)

    return {
      props: {
        isAuth,
      },
    }
  } catch (error) {
    return {
      redirect: {
        destination: authRouts.notAuthorized,
        permanent: false,
      },
    }
  }
}

type HomeType = {
  isAuth: UserData
}

const Home = (props: HomeType) => {
  const {isAuth} = props
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
