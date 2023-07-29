import { serverAPI } from '@/assets/api/api'
import { GetServerSideProps, NextApiRequest } from 'next'

type Props = {
  isAuth: boolean
}

export const hideWhenAuth: GetServerSideProps<Props> = async ({ req }) => {
  try {
    const isAuth = await serverAPI.auth.meServer(req as NextApiRequest)

    if (isAuth) {
      return {
        redirect: {
          destination: '/home',
          permanent: false,
        },
      }
    }

    return {
      props: {
        isAuth: false, // Provide the isAuth value as false when user is not authenticated
      },
    }
  } catch (error) {
    console.error(error)

    return {
      props: {
        isAuth: false, // Provide the isAuth value as false when there is an error
      },
    }
  }
}
