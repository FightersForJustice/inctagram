import { profileApi } from '@/assets/api/user/profileApi'
import { ProfileData } from '@/assets/api/user/userTypes'
import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import ProfileTabs from '@/components/profile/Tabs/ProfileTabs'

export const getServerSideProps = async () => {
  const userProfile = await profileApi.getProfile()

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
}

type ProfileType = {
  userProfile: ProfileData
}

const ProfileSettings = (props: ProfileType) => {
  const { userProfile } = props

  const aboutMe = userProfile.aboutMe || 'no data'

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
