import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { axiosAPI } from '@/assets/api/api'
import { authRouts } from '@/components/common/Auth/authRoutes'
import { NextApiRequest } from 'next'

export const withAuth = <P extends {}>(getServerSidePropsFunc: GetServerSideProps<P>) => {
  return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const { req, res } = context

    try {
      const isAuth = await axiosAPI.auth.meServer(req as NextApiRequest) // Check if the user is authorized

      if (!isAuth) {
        return {
          redirect: {
            destination: authRouts.login,
            permanent: false,
          },
        }
      }

      return await getServerSidePropsFunc(context)
    } catch (error) {
      return {
        redirect: {
          destination: authRouts.login,
          permanent: false,
        },
      }
    }
  }
}
