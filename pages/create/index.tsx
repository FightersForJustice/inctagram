import { UserData } from '@/assets/api/auth/authTypes'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'
import { PageWrapper } from '@/components/common/PageWrapper/PageWrapper'
import PostCreation from '@/components/PostCreation/PostCreation'
import { withAuth } from '@/utils/getServerSideProps/withAuth'
import { GetServerSideProps, NextApiRequest } from 'next'
import { axiosAPI } from '@/assets/api/api'
import { ProfileType } from '@/components/Profile-Settings/profileSettingsTypes'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setUserProfileSSR } from '@/core/slices/userSlice'

export const getServerSideProps: GetServerSideProps = withAuth(async ({ req }) => {
  const userProfile = await axiosAPI.profile.getProfileFromServer(req as NextApiRequest)

  if (!userProfile) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      userProfile,
    },
  }
})

type HomeType = {
  isAuth: UserData
}
const Create = (props: HomeType & ProfileType) => {
  const { isAuth, userProfile } = props
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUserProfileSSR(userProfile))
  })

  return (
    <PageWrapper>
      <PostCreation />
    </PageWrapper>
  )
}

Create.getLayout = getSideBarLayout
export default Create
