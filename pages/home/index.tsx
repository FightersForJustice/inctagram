import { serverAPI } from '@/assets/api/api'
import { getLayout } from '@/components/Layout/Layout'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { userRouts } from '@/components/common/User/userRouts'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

//add me-Query in getServerSideProps

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      await serverAPI.profile.getProfile() //data приходит
    }

    fetchData()
  }, [])

  const handleClick = () => {
    router.push(userRouts.profileSettings)
  }

  return (
    <PageWrapper>
      <button
        onClick={handleClick}
        style={{
          width: '200px',
          height: '50px',
        }}
      >
        Profile Settings
      </button>
    </PageWrapper>
  )
}

Home.getLayout = getLayout
export default Home
