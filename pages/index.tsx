import { NextPageWithLayout } from './_app'
import { getLayout } from '@/components/Layout/Layout'
import { GetServerSideProps, NextApiRequest } from 'next'
import { axiosAPI } from '@/assets/api/api'
import { authRouts } from '@/app/routes/authRoutes'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const isAuth = await axiosAPI.auth.meServer(req as NextApiRequest)

    if (!isAuth) {
      return {
        redirect: {
          destination: authRouts.login,
          permanent: false,
        },
      }
    }

    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  } catch (error) {
    return {
      redirect: {
        destination: authRouts.login,
        permanent: false,
      },
    }
  }
}

const Home: NextPageWithLayout = () => {
  return <></>
}

Home.getLayout = getLayout

export default Home
