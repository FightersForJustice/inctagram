import { axiosAPI } from '@/assets/api/api'
import { UserProfile } from '@/assets/api/user/userTypes'
import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import ProfileTabs from '@/components/profile/Tabs/ProfileTabs'
import { withAuth } from '@/utils/withAuth'
import { GetServerSideProps, NextApiRequest } from 'next'

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

type ProfileType = {
  userProfile: UserProfile
}

const ProfileSettings = (props: ProfileType) => {
  const { userProfile } = props

  return (
    <>
      <PageWrapper>
        <ProfileTabs userProfile={userProfile} />
      </PageWrapper>
    </>
  )
}

ProfileSettings.getLayout = getLayout

export default ProfileSettings
