import { axiosAPI } from '@/assets/api/api'
import { withAuth } from '@/utils/getServerSideProps/withAuth'
import { GetServerSideProps, NextApiRequest } from 'next'
import { HomeType } from '../../components/Home/homeTypes'
import Home from '@/components/Home/Home'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'

export const getServerSideProps: GetServerSideProps = withAuth(async ({ req }) => {
  const isAuth = await axiosAPI.auth.meServer(req as NextApiRequest)
  return {
    props: {
      isAuth,
    },
  }
})

const HomePage = (props: HomeType) => {
  return <Home isAuth={props.isAuth} />
}

HomePage.getLayout = getSideBarLayout
export default HomePage
