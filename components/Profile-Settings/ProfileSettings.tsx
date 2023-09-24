import { PageWrapper } from '../common/PageWrapper/PageWrapper'
import ProfileTabs from './profile/Tabs/ProfileTabs'
import { ProfileType } from './profileSettingsTypes'
import { useProfileSettings } from './useProfileSettings'

const ProfileSettings = (userProfile: ProfileType) => {
  useProfileSettings(userProfile)

  return (
    <>
      <PageWrapper>
        <ProfileTabs />
      </PageWrapper>
    </>
  )
}

export default ProfileSettings
