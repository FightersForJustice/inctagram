import { axiosAPI } from '@/assets/api/api'
import { getLayout } from '@/components/Layout/Layout'
import { withAuth } from '@/utils/getServerSideProps/withAuth'
import { GetServerSideProps, NextApiRequest } from 'next'
import { ProfileType } from '../../../components/Profile-Settings/profileSettingsTypes'
import ProfileSettings from '@/components/Profile-Settings/ProfileSettings'

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

const ProfileSettingsPage = ({ userProfile }: ProfileType) => {
  return <ProfileSettings userProfile={userProfile} />
}

ProfileSettingsPage.getLayout = getLayout
export default ProfileSettingsPage
