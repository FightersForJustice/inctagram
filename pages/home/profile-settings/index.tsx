import { useGetProfileQuery } from '@/assets/api/user/profileApi_'
import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import ProfileTabs from '@/components/profile/Tabs/ProfileTabs'
import { GetServerSideProps } from 'next'

// Fetch data on the server-side using getServerSideProps
// export async function getServerSideProps() {
//   try {
//     const { data } = await profileApi.endpoints.getProfile.initiate() // Fetch the profile data using RTKQ
//     return {
//       props: {
//         userProfile: data, // Pass the fetched data as props
//       },
//     }
//   } catch (error) {
//     // Handle any errors that may occur during the data fetching
//     return {
//       props: {},
//     }
//   }
// }

const ProfileSettings = () => {
  return (
    <>
      <PageWrapper>
        <ProfileTabs />
        {/* <ProfileTabs userProfile={userProfile} /> */}
      </PageWrapper>
    </>
  )
}

ProfileSettings.getLayout = getLayout
export default ProfileSettings
