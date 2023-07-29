import { serverAPI } from '@/assets/api/api'
import { UserProfile } from '@/assets/api/user/userTypes'
import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { authRouts } from '@/components/common/Auth/authRoutes'
import ProfileTabs from '@/components/profile/Tabs/ProfileTabs'
import { checkAuth } from '@/utils/checkAuth'
import { GetServerSideProps, NextApiRequest } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (!checkAuth()) {
    return {
      redirect: {
        destination: authRouts.notAuthorized,
        permanent: true,
      },
    }
  }

  const userProfile = await serverAPI.profile.getProfileFromServer(req as NextApiRequest)

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
