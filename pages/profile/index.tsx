import { axiosAPI } from '@/assets/api/api'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'
import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { GetServerSideProps, NextApiRequest } from 'next'
import { withAuth } from '@/utils/getServerSideProps/withAuth'
import MyProfile from '@/components/MyProfile/MyProfile'
import { MyProfileType } from '@/assets/api/myProfile/MyProfile.Types'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setPostUser } from '@/core/slices/postUserSlice'

export const getServerSideProps: GetServerSideProps = withAuth(async ({ req }) => {
  const isAuth = await axiosAPI.auth.meServer(req as NextApiRequest)
  const userProfile = await axiosAPI.profile.getProfileFromServer(req as NextApiRequest, isAuth.userId)
  const postsUser = await axiosAPI.postsUser.getPostsUserSSR(req as NextApiRequest)

  return {
    props: {
      userProfile,
      postsUser,
    },
  }
})

const MyProfilePage = ({ userProfile, postsUser }: MyProfileType) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPostUser(postsUser))
  }, [postsUser])

  return (
    <PageWrapper>
      <MyProfile userProfile={userProfile} />
    </PageWrapper>
  )
}

MyProfilePage.getLayout = getSideBarLayout
export default MyProfilePage
