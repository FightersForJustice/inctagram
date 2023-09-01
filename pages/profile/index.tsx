import { axiosAPI } from '@/assets/api/api'
import { UserData } from '@/assets/api/auth/authTypes'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { GetServerSideProps, NextApiRequest } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const isAuth = await axiosAPI.auth.meServer(req as NextApiRequest)
  return {
    props: {
      isAuth,
    },
  }
}

type HomeType = {
  isAuth: UserData
}

const MyProfile = (props: HomeType) => {

  return (
    <PageWrapper>

    </PageWrapper>
  )
}

MyProfile.getLayout = getSideBarLayout
export default MyProfile
