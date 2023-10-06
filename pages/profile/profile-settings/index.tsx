import { axiosAPI } from '@/assets/api/api'
import { withAuth } from '@/utils/getServerSideProps/withAuth'
import { GetServerSideProps, NextApiRequest } from 'next'
import { ProfileType } from '@/components/Profile-Settings/profileSettingsTypes'
import ProfileSettings from '@/components/Profile-Settings/ProfileSettings'
import { getSideBarLayout } from '@/components/Layout/SideBarLayout/SideBarLayout'

export const getServerSideProps: GetServerSideProps = withAuth(async ({ req }) => {
  const isAuth = await axiosAPI.auth.meServer(req as NextApiRequest)
  const userProfile = await axiosAPI.profile.getProfileFromServer(req as NextApiRequest, isAuth.userId)

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

const ProfileSettingsPage = ({ userProfile }: ProfileType) => {
  return <ProfileSettings userProfile={userProfile} />
}

ProfileSettingsPage.getLayout = getSideBarLayout
export default ProfileSettingsPage
