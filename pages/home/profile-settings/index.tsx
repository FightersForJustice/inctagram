import { axiosAPI } from '@/assets/api/api'
import { UserProfile } from '@/assets/api/user/userTypes'
import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import ProfileTabs from '@/components/profile/Tabs/ProfileTabs'
import { withAuth } from '@/utils/getServerSideProps/withAuth'
import { GetServerSideProps, NextApiRequest } from 'next'
import { ProfileType } from './profileSettingsTypes'
import { useProfileSettings } from './useProfileSettings'

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

const ProfileSettings = (props: ProfileType) => {
  useProfileSettings(props)

  return (
    <>
      <PageWrapper>
        <ProfileTabs />
      </PageWrapper>
    </>
  )
}

ProfileSettings.getLayout = getLayout

export default ProfileSettings
