import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getLayout } from '@/components/Layout/Layout'
import { useLogoutMutation } from '@/assets/api/auth/authQueryApi'
import { authRouts } from '@/components/common/Auth/authRoutes'
import { removeAccessTokenCookie } from '@/utils/cookies'

const Logout = () => {
  const [logout] = useLogoutMutation()
  const router = useRouter()
  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout({})
          .unwrap()
          .then(() => {
            router.push(authRouts.login)
            removeAccessTokenCookie()
          })
      } catch (error) {
        console.error('Error occurred while logging out:', error)
      }
    }
    performLogout()
  }, [logout])
}
Logout.getLayout = getLayout
export default Logout
