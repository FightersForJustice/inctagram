import { axiosAPI } from '@/assets/api/api'
import { ServerErrorResponse } from '@/assets/api/auth/authTypes'
import { GetServerSideProps, NextApiRequest } from 'next'

type Props = {
  isAuth: boolean
}

export const hideWhenAuth: GetServerSideProps<Props> = async ({ req }) => {
  try {
    const isAuth = await axiosAPI.auth.meServer(req as NextApiRequest)

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
  } catch (error: any) {
    console.error(error.response.status)

    return {
      props: {
        isAuth: false, // Provide the isAuth value as false when there is an error
      },
    }
  }
}
