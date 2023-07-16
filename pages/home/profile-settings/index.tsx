import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import ProfileTabs from '@/components/profile/Tabs/ProfileTabs'

const ProfileSettings = () => {
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
