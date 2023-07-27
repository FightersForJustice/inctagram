import { serverAPI } from '@/assets/api/api'
import { UserProfile } from '@/assets/api/user/userTypes'
import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import ProfileTabs from '@/components/profile/Tabs/ProfileTabs'
import { isAuth } from '@/utils/auth'
import { GetServerSideProps } from 'next'
import { parse } from 'cookie'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context

  // console.log(' LOG cookies', req.cookies)
  // console.log(' LOG headers', req.headers)
  console.log('LOG REQEST', req)
  console.log('LOG RESPONSE', res)

  const cookies = parse(req.headers.cookie || '')
  const token = cookies.accessToken

  if (!token) {
    return {
      redirect: {
        destination: '/not-authorized',
        permanent: false,
      },
    }
  }

  const userProfile = await serverAPI.profile.getProfile()

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
