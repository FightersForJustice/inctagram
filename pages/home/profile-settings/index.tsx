import { serverAPI } from '@/assets/api/api'
import { UserProfile } from '@/assets/api/user/userTypes'
import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { authRouts } from '@/components/common/Auth/authRoutes'
import ProfileTabs from '@/components/profile/Tabs/ProfileTabs'
import { GetServerSideProps, NextApiRequest } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const isAuth = await serverAPI.auth.meServer(req as NextApiRequest)

    if (!isAuth) {
      return {
        redirect: {
          destination: authRouts.notAuthorized,
          permanent: false,
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
        isAuth,
        userProfile,
      },
    }
  } catch (error) {
    return {
      redirect: {
        destination: authRouts.notAuthorized,
        permanent: false,
      },
    }
  }
}

type ProfileType = {
  userProfile: UserProfile
  // isAuth: UserData // if needed
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
