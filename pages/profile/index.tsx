import { axiosAPI } from '@/assets/api/api'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'
import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import { GetServerSideProps, NextApiRequest } from 'next'
import { withAuth } from '@/utils/getServerSideProps/withAuth'
import { MyProfileType } from '@/assets/api/myProfile/MyProfile.Types'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setPostUser } from '@/core/slices/postUserSlice'
import MyProfileContainer from '@/components/MyProfile/MyProfileContainer'
import { setUserProfileSSR } from '@/core/slices/userSlice'

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
  console.log(userProfile)
  useEffect(() => {
    dispatch(setUserProfileSSR(userProfile))
    dispatch(setPostUser(postsUser))
  }, [postsUser])

  return (
    <PageWrapper>
      <MyProfileContainer userProfile={userProfile} />
    </PageWrapper>
  )
}

MyProfilePage.getLayout = getSideBarLayout
export default MyProfilePage
