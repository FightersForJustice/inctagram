import { serverAPI } from '@/assets/api/api'
import { UserProfile } from '@/assets/api/user/userTypes'
import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import ProfileTabs from '@/components/profile/Tabs/ProfileTabs'

export const getServerSideProps = async () => {
  const userProfile = await serverAPI.profile.getProfile()

  const isAuth = false //hardcode | get meQuery value here

  if (!userProfile) {
    return {
      notFound: true,
    }
  }

  if (!isAuth) {
    return {
      redirect: {
        destination: 'not-authorized',
        permanent: false,
      },
    }
  }

  return {
    props: {
      userProfile,
    },
  }
}

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
