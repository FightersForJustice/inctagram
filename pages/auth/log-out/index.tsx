import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getLayout } from '@/components/Layout/Layout'
import { useLogoutMutation } from '@/assets/api/auth/authApi'
import { PageWrapper } from '@/components/PageWrapper/PageWrapper'
import { Loading } from '@/components/common/Loaders/Loading'

const LogOut = () => {
    const router = useRouter()
    useEffect(() => {
        localStorage.removeItem('accessToken');
        router.push('/')
      }, [])
}

LogOut.getLayout = getLayout
export default LogOut
